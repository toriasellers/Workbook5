let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 3.49},
    {product: "Hershey's Kisses", price: 4.99},
    {product: "Jelly Beans", price: 2.49},
    {product: "Skittles", price: 1.99},
    {product: "Twix", price: 1.79},
    {product: "Snickers", price: 1.79}
];

// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?

let under4 = products.filter(function(item){
    return Number(item.price) <= 4;
});

for(let item of under4){
    console.log(item.product);
};

let under4ArrowVersion = products.filter(item => Number(item.price) <= 4);

for(let item of under4ArrowVersion){
    console.log(item.product);
}

