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
  }
};