export const routes: any[] = [
    {
        name: "Product",
        disabled: true,
        path: "product",
    },
];

export const reviews = function():object[] {
    let reviews = [];
    for (let i = 1; i <= 18; i++) {
        reviews.push({
            name: `Mr A${i}`,
            rating: 4,
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            like: 20,
            dislike: 6,
            time: `${i} sep 2019`
        })
    }
    return reviews
}
