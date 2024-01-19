//Products boxes
let productsContainer = document.querySelector(".products .container");
let imgesArr = [];
let names = ["Blue Dream", "Pure White", "Vibarent", "Lilly Bloom", "Joyful Bouquet", "Pink Gerbera", "Sweet Spring", "Classic Charm", "Garden Party", "Heart Warming", "Cottage", "Wild Beauty"];
let prices = [1400, 1299, 2499, 1999, 4499, 6599, 2499, 999, 1299, 1999, 1200, 11000];
for (let i = 0; i < names.length; i++) {
    imgesArr[i] = `images/p1 (${i+1}).jpg`;
}

//create rows
let index = 0;
for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.className = "row";
    
    //create boxes
    for (let j = 0; j < 4; j++) {
        let box = document.createElement("div");
        let image = document.createElement("div");
        let text = document.createElement("div");

        box.className = "box col-md-3 col-sm-6";
        image.className = "image";
        text.className = "text mt-2";

        let img = document.createElement("img");
        img.className = "img";
        img.src = imgesArr[index];
        
        let head2 = document.createElement("h2");
        head2.className = "name";
        head2.innerHTML = names[index];
        
        
        let para = document.createElement("p");
        para.className = "price";
        para.innerHTML = `Rs ${prices[index]}`;
        
        
        image.appendChild(img);
        text.appendChild(head2);
        text.appendChild(para);

        let btn = document.createElement("button");
        btn.className = "mb-3";
        btn.innerHTML = "Order";
        text.appendChild(btn);

        box.appendChild(image);
        box.appendChild(text);

        row.appendChild(box);
        index++;
        

    }
    productsContainer.appendChild(row);
}
