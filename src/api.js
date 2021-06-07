import { async } from "q";

let BASE = 'https://api.b7web.com.br/devsfood/api';
//let BASE = 'http://127.0.0.1:3000'
export default {
  getCategories: async () => {
    // GET /categories
    const res = await fetch(BASE+'/categories');
    const json = await res.json();

    console.log("AQUI");
    
    console.log(json);
    
    return json;
  },
  getProducts: async () => {
    const res = await fetch(BASE+'/products');
    const json = await res.json();

    console.log("AQUI 2");
    
    console.log(json);
    
    return json;
  }
};