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
  getProducts: async (category, page, search) => {
    
    let fields = {};
    if( category !== 0){
      fields.category = category;
    }
    if( page > 0 ){
      fields.page = page;
    }
    if( search != ''){
      fields.search = search;
    }

    let queryString = new URLSearchParams(fields).toString(); 

    const res = await fetch(BASE+'/products?'+queryString);
    const json = await res.json();

    return json;
  },
  postProduct: async (fData) => {
    const res = await fetch(BASE+'/product/add',{
      method: 'POST',
      body: fData
    })
    const json = await res.json();
    return json;
  }
};