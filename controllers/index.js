console.log("Hello Cybersoft");

var arrProduct = [
  {
    id: 1,
    name: "iphone x",
    price: 1000,
    img: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 1,
    name: "iphone x",
    price: 1000,
    img: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 1,
    name: "iphone x",
    price: 1000,
    img: "https://picsum.photos/id/3/200/200",
  },
];

function renderProduct() {
  console.log('Dev B moi sua doan code nay nha!');
  var content = "";
  for (var i = 0; i < arrProduct.length; i++) {
    let product = arrProduct[i];
    content += `
        <div class="col-4>
            <div class="card">
                <img src="${product.img}" alt="..." />
                <div class="card-body">
                    <p>${product.price}</p>
                    <button>Mua hang</button>
                </div>
            </div>
        </div>`;
  }
  document.querySelector("#arrProduct").innerHTML = content;
}
renderProduct();
