import React, { useState , useEffect, useRef} from 'react';
import  { Link, useHistory } from 'react-router-dom';
import { PageArea, PageContainer, PageTitle, ErrorMessage } from './styled'


import api from '../../api';



const Page = () => {

  // const api = api();

  const fileField = useRef();

  const history = useHistory();

  const [categories, setCategories] = useState([]);

  
  const [name, setName] = useState('');
  const [category, setCategory] = useState();
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState(0);
  const [ingredients, setIngredients] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  useEffect(()=>{
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats.result);
      console.log('CATEGORIES');      
      console.log(categories);
    }
    getCategories();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabled(true);

    setError('');
    
    let errors = [];

    if(!name.trim()){
      errors.push('Sem título');
    }
    if(!category){
      errors.push('Sem categoria');
    }

    if ( errors.length === 0){
      const fData = new FormData();
      fData.append('name', name);
      fData.append('price', price);
      fData.append('featured_image', featuredImage);
      fData.append('image', image);
      fData.append('points', points);
      fData.append('ingredients', ingredients);
      fData.append('category_id', category);

      // if ( fileField.current.files.length > 0){
      //   for (let i = 0; i < fileField.current.files.length; i++) {
      //     fData.append('featured_image', fileField.current.files[i]);          
      //   }
      // }

      const json = await api.postProduct(fData);

      if (!json.error){
        history.push('/');
        return;
      } else {
        setError(json.error);
      }

    } else{
      setError(errors.join('\n'));
    }


    
    setDisabled(false);
  }

  return (
    <div>
      <div>Postar um anúncio</div>
      <div >
        {error &&
          <div>
            {error}
          </div>
        }
        <Link to="/" >Voltar para a HOME</Link>

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Título</div>
            <div className="area--input">
              <input 
                type="text" 
                disabled={disabled}
                required
                value={name}
                onChange={e=>setName(e.target.value)} 
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Categoria</div>
            <div className="area--input">
              <select
                disabled={disabled}
                onChange={e=>setCategory(e.target.value)}
                required
              >
                <option></option>
                { categories && categories.map((i, k)=>(
                    <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Preço: R$</div>
            <div className="area--input">
            <input 
                type="number"
                step="0.01"                 
                disabled={disabled}
                required
                value={price}
                onChange={e=>setPrice(e.target.value)} 
              />
            </div>
          </label>
          
          <label className="area">
            <div className="area--title">Ingredientes</div>
            <div className="area--input">
              <textarea                 
                disabled={disabled}
                required
                value={ingredients}
                onChange={e=>setIngredients(e.target.value)} 
              ></textarea>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Imagem</div>
            <div className="area--input">
              <input
                type="file"
                disabled={disabled}
                required
                accept="image/*"
                multiple={false}
                //ref={fileField}
                onChange={(e)=>setFeaturedImage(e.target.files[0])}                                
              />
            </div>
          </label>
          <div className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Adicionar Anúncio</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;