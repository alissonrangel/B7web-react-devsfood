const initialState = {
  products: [],
  address:[],
  discount:0,
  delivery:0
};

export default (state = initialState, action) => {
  let products = [...state.products];
  switch(action.type) {

      case 'CHANGE_PRODUCT':        
        if ( products[action.payload.key] ){
          switch(action.payload.type){
            case '-':
              products[action.payload.key].qt -= 1
              if ( products[action.payload.key].qt <= 0 ){
                products = products.filter((item, index)=> index != action.payload.key )
              }
            break;
            case '+':
              products[action.payload.key].qt += 1
            break;
          }
        }
        return { ...state, products }
      break;
      case 'ADD_PRODUCT':
        // let products = [...state.products];
        let id = action.payload.data.id;
        let index = products.findIndex(item => item.id === id);
        if ( index > -1){
          products[index].qt += action.payload.qt;
        } else {
          products.push({
            ...action.payload.data,
            qt: action.payload.qt
          })
        }
        console.log(products);
        
        return { ...state, products }
      break;
      // case 'SET_NAME':
      //     return {...state, name: action.payload.name};
      // break;
  }

  return state;
}