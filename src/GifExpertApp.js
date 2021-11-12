import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    /*  const handleAdd = () => {
        return setcategories( [...categories, '7 Pecados capitales']);
        setcategories( cats => [...cats, '7 Pecados capitales']);
        
    }  */

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
            setCategories={setCategories} 
            categories={categories}
            />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                { 
                    categories.map( category =>(
                        <GifGrid
                            key={ category }
                            category={ category }
                         />
                    ))
                }
            </ol>

        </>
    )
};

