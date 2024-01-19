var box = document.getElementsByClassName("box");
var sz = box.length;
for(let i = 0; i < sz ; i++)
{
    (function(i) {
    var box_img = box[i].getElementsByTagName('img')[0];
    var box_name = box[i].getElementsByTagName('h2')[0];
    var box_price = box[i].getElementsByTagName('p')[0];
    var box_btn = box[i].getElementsByTagName('button')[0];
    
    box_btn.addEventListener('click', function()
    {
        
        localStorage.setItem('box_img', box_img.src);
        localStorage.setItem('box_name', box_name.innerHTML);
        localStorage.setItem('box_price', box_price.innerHTML);
        
        window.location.href = "checkout.html";

    });
    })(i);
    
}
