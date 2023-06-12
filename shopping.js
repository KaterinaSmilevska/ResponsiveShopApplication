function getItems(){
    let shoppingCart = {
        items: []
    }
    return shoppingCart;
}

function GetShoppingCart(){
    let item = window.localStorage.getItem('shoppingCart');
    if(item !== null){
        return JSON.parse(item);
    }
    else{
        return getItems();
    }

}

function SetShoppingCart(item){
    window.localStorage.setItem('shoppingCart', JSON.stringify(item));
}

function addToShoppingList(){

    let album = filterAlbums();

    let shop = GetShoppingCart();

    shop.items.push(album);

    shop.items.sort((a, b) => a.price - b.price);

    SetShoppingCart(shop);
}

function deleteFromShoppingList(code){

    let shop = GetShoppingCart();
    shop.items = shop.items.filter(a => a.albumCode !== code);

    SetShoppingCart(shop);

    if(shop.items.length === 0){
        let el = document.getElementById("empty");
        el.style.display = "flex";
        el.style.justifyContent = "center";
        el.style.alignItems = "center";
        document.getElementById("productContainer").style.display = "none";
    }
}

function noItems(){
    let shop = GetShoppingCart();
    if(shop.items.length === 0){
        let el = document.getElementById("empty");
        el.style.display = "flex";
        el.style.justifyContent = "center";
        el.style.alignItems = "center";
        document.getElementById("productContainer").style.display = "none";
    }
}

function total(){
    let shop = GetShoppingCart();
    let sum = 0;
    for(let i = 0; i < shop.items.length; i++){
        sum = sum + parseFloat(shop.items[i].price);
    }

    document.getElementById("total").innerText = "$" + formatNumber(sum.toString());
}

function clearShoppingCart(){
    let shop = GetShoppingCart();
    shop.items.clear();
    SetShoppingCart(shop);
}

function showShoppingList(){
    let tmpl = $.templates("#productTemplate");
    tmpl.link("#productContainer", GetShoppingCart());
}