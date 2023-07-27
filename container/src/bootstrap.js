import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";

mountProducts(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
// NOTE: naming the element id 'cart' or 'products' will cause a conflict with the
//       webpack ModuleFederationPlugin name in the cart and products webpack.config.js
// this is because a variable is created for each element id in the container
// creating a conflict with the remote module name
//  accessing the cart or products remote module will instead return the element

console.log("Container!");
