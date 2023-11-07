let menuItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
    ];

    // find subset of elements that match a condition

    let category = "Meal";

    let menuItemsMatchCategory = [];

    for(let item of menuItems){
        if(item.categoru === category){
            menuItemsMatchCategory.push(item);
        }
    }



//    function findMenuItemById(items,id){

//         let menuItem = null;

//         for(let item of items){
//             if(item.id === id){
//                 menuItem = item;
//                 break;
//             }
//         }

//         return menuItem;

   }

let foundItem = findMenuItemById(menuItems, 4);
console.log(foundItem);
