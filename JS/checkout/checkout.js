window.onload = function() {
    var div_order_details = document.getElementById("order_details");
    

    var order_img = div_order_details.getElementsByTagName('img')[0];
    var order_name = div_order_details.getElementsByTagName('p')[0];
    var order_price = div_order_details.getElementsByTagName('span')[0];

    var box_img = localStorage.getItem('box_img');
    var box_name = localStorage.getItem('box_name');
    var box_price = localStorage.getItem('box_price');


    order_img.setAttribute('src', box_img);
    order_name.innerHTML = box_name;
    order_price.innerHTML = box_price;
};
