import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getItem } from '@/shared/helper';
import { get } from 'lodash';
import { error } from '@/plugins/toast.plugin';
import router from '@/router';
import store from '@/store'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const HandlingError = (err: AxiosError) => {
    if (err) {
        if (err.response?.status === 401) {
            if ((/api\/user\/favorite-products/g).test(err.response?.config.url || '')) {
                store.commit("user/handleModal", true);
            }
            if ((/api\/user\/cart-items/g).test(err.response?.config.url || '')) {
                store.commit("user/handleModal", true);
            }
            store.commit("user/changeLogin", false);
            localStorage.clear();
            error(err.message)
            return (err.message)
        }
        if (err.response?.status === 503) {
            localStorage.clear();
            router.push("/maintain")
        }
    }
};

const makeRequest = (config: Partial<AxiosRequestConfig | never> = {}): AxiosRequestConfig => {
    let headers = {};
    let params = {};

    for (const propName in config) {
        const resultValue = get(config, propName);
        if (
            resultValue === null ||
            resultValue === undefined ||
            (typeof resultValue === 'string' && resultValue.trim() === '')
        ) {
            // @ts-ignore
            delete config[propName];
        }
        if (propName === 'headers') {
            headers = config[propName];
            delete config[propName];
        }
        if (propName === 'params') {
            params = config[propName];
            delete config[propName];
        }
    }

    const opts: Partial<AxiosRequestConfig> = {};

    if (headers) {
        opts.headers = headers;
    }
    if (params) {
        opts.params = params;
    }
    return opts;
};

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (getItem<String>("token", "")) {
            config.headers['authorization'] = `Bearer ${(getItem<String>("token", "") as any).token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (err: AxiosError) => {
        return Promise.reject(HandlingError(err));
    },
);


export default {
    get(path: string, params = {}): Promise<never> {
        const request = makeRequest(params);
        return service.get(path, request);
    },
    post(path: string, data = {}, config?: AxiosRequestConfig): Promise<never> {
        const request = makeRequest(config);
        return service.post(path, data, request);
    },
    delete(path: string, params = {}): Promise<never> {
        const request = makeRequest(params);
        return service.delete(path, request);
    },
};