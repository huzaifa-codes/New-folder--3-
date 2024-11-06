
const get = localStorage.getItem("card");
const deta = JSON.parse(get);

console.log(deta);

const div = document.querySelector("#output");

deta.map((item, index) => {
    div.innerHTML += `
      <div class="card">
      <div class="card-image">
      <img src="${item.image}" />
      </div>
      <div class="content">
      <h2>${item.brand} ${item.model}</h2>
      <h3>Storage: ${item.ram} / ${item.rom}</h3>
       <h2 id="price${index}">price:${item.price}</h2>
      <div id="display" style="display: inline-block;">
        <div style="display: flex; align-items: center;">
  
          <button class="plus-minus-btn" onclick="plus(${index})">+</button>
          <h2 id="num${index}" style="margin: 0 10px;">1</h2>
          <button class="plus-minus-btn" onclick="minus(${index})">-</button>
        </div>
        <br>    
        <div class="button-container">
          <button class="delete-btn" onclick="delete1(${index})">Delete</button>
          <button class="buy-now-btn" onclick="buynow(${index})">Buy Now!</button>
        </div>
      </div>
      </div>
    `;
});

function plus(index) {
    const price = document.querySelector(`#price${index}`)
    const plus = document.querySelector(`#num${index}`);
    plus.innerHTML++;
    price.innerHTML = `price: ${deta[index].price * plus.innerHTML}`;
}

function minus(index) {
    const price = document.querySelector(`#price${index}`)
    const minus = document.querySelector(`#num${index}`);
    if (minus.innerHTML > 1) {
        minus.innerHTML--;
        price.innerHTML = `price: ${deta[index].price * minus.innerHTML}`;
    }
}



function delete1(index){
    
    deta.splice(index , 1)
    localStorage.setItem("card", JSON.stringify(deta)); 
    
    div.innerHTML = ""

    deta.map((item , index) => {
    div.innerHTML += `
      <div class="card">
      <div class="card-image">
      <img src="${item.image}"/>
      </div>
      <div class="content">
      <h2>${item.brand} ${item.model}</h2>
      <h3>Storage: ${item.ram} / ${item.rom}</h3>
      <h3>Price: $${item.price}</h3><br>
      <div id="display" style="display: inline-block;">
        <div style="display: flex; align-items: center;">
          <button class="plus-minus-btn" onclick="plus(${index})">+</button>
          <h2 id="num${index}" style="margin: 0 10px;">1</h2>
          <button class="plus-minus-btn" onclick="minus(${index})">-</button>
        </div>
        <br>    
        <div class="button-container">
          <button class="delete-btn" onclick="delete1(${index})">Delete</button>
          <button class="buy-now-btn" onclick="buynow(${index})">Buy Now!</button>
        </div>
      </div>
      </div>
    `;
})};

