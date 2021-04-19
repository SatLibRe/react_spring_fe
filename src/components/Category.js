
import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';

function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/api/categories')
        .then(response => response.json())
        .then(data => {
          setCategories(data)
          console.log(data)
        });      
    },[]);

    
  
    return (
      <div className="xx">
          <NavBar/>
          {categories.map(x => <p> {x.name} </p>)}
      </div>
    );
  }
  
export default Category;