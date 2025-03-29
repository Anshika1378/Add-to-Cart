   //script.js
   document.addEventListener("DOMContentLoaded", () =>{
    const products = [
      {id: 1, name: "Laptop", price: 12000 },
      {id: 2, name: "SmartPhone", price:5000 },
      {id: 3, name: "Headphones", price:2000 },
      {id: 4, name: "Mouse", price:500 },
      {id: 5, name: "Tv", price:5000 },
    ];
    
    const productList = document.getElementById("productList");
    const cartList= document.getElementById("cartList");
    const cartTotal = document.getElementById("cartTotal");
    
    let cart =[];
    
    //render Products
    function displayProducts(){
      productList.innerHTML ="";
      products.forEach((product) => {
         const productCard = document.createElement("div");
         productCard.classList.add("product-card");
         productCard.innerHTML=`
            <span>${product.name}- $${product.price.toFixed(2)}</span>
            <button onclick="addToCart (${product.id})">Add to Cart</button>
         `;
         productList.appendChild(productCard);
      });
    }
    
    //render CART
    function displayCart(){
      cartList.innerHTML = "";
      let total = 0;
      
      cart.forEach((item) =>{
        total +=item.price * item.quantity;
        
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML=`
         <span>${item.name} (x${item.quantity})</span>
         <div>
         <button onclick="removeFromCart(${item.id})">Remove</button>
         </div>
        `;
        cartList.appendChild(cartItem);
      });
      cartTotal.textContent = total.toFixed(2);
    }
    
    //Add product to CART
    window.addToCart = function(id) {
      const product= products.find((p)=>p.id===id);
      const existingItem = cart.find((item) => item.id=== id);
      console.log(cart);
      
      if (existingItem){
        existingItem.quantity++;
      }else{
        cart.push({...product,quantity:1});
      }
      displayCart();
    };
    
    //Remove product from cart
    window.removeFromCart= function(id){
    const existingItem = cart.find((item) => item.id===id);
    if(existingItem.quantity>1){
      existingItem.quantity--;
      }else{
      cart = cart.filter((item)=> item.id !== id);
      }
      displayCart();
      };
      
    //initialize
    displayProducts();
    displayCart();
  });