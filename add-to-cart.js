function buyNow() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'flex';
    document.getElementById('box3').style.display = 'flex';
}

let quantity = 1;
let price = 1025;
let fee = 50;
let subtotal = 1025;
let total = 1025 + fee;



function add() {
    if (quantity < 10) {
        quantity = quantity + 1;
        subtotal = subtotal + price;
        total = total + price;
        document.getElementById('q').innerHTML = quantity ;
        document.getElementById('subtotal').innerHTML = subtotal + ".00";
        document.getElementById('quantity').innerHTML = quantity;
        document.getElementById('total').innerHTML = total + ".00";
    } else {
        alert('Maximum Item Reached');
    }

}

function sub() {
    if (quantity > 1) {
        quantity = quantity - 1;
        subtotal = subtotal - price;
        total = total - price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('subtotal').innerHTML = subtotal + ".00";
        document.getElementById('quantity').innerHTML = quantity;
        document.getElementById('total').innerHTML = total + ".00";
    } else {
        alert('Minimum Item Reached');
    }
}



function buy() {
    var x = document.getElementById('sulod').style.display = "none";
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function checkout() {
    document.getElementById('box4').style.display = 'flex';
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box3').style.display = 'none';
    document.getElementById('checkout-quantity').innerHTML = quantity;
    document.getElementById('checkout-total').innerHTML = 'TOTAL: '+ total + ".00";
}