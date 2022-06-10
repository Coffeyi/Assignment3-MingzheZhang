function toHome(){
    window.location.href="index.html";
}

function toProductlist(){
    window.location.href="productlist.html"
}

function toProductPage(){
    window.location.href="productpage.html"
}

function toCart(){
    window.location.href="cart.html"
}

function checkOut(){
    window.location.href="checkout.html"
}

function toConfirm(){
    window.location.href="confirm.html"
}

function toFinish(){
    window.location.href="finish.html"
}

function minus(){
    var x = document.getElementById("cart_i2");
    x.style.display = "none";
}

function cancel(){
    var x = document.getElementById("amy");
    x.style.display = "none";
}

function addCart(){
    var x = document.getElementById("cart_i2")
    x.style.display = "flex";
}