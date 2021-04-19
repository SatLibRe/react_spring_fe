
import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Expenses() {   
    
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(true);

    const handleSubmit = (e) => {
        fetch('http://localhost:8080/api/expenses', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 101,
                expensedate: date,
                description: description,
                category: category,
                user: {
                    "id": 1,
                    "name": "email@email.com",
                    "email": "miles"
                  }   
            }),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        e.preventDefault();
        alert("Submitted!")
    }

    const handleChange = (e) => {     
        if(e.target.name == "description-field") setDescription(e.target.value)     
        if(e.target.name == "category-field") setCategory(e.target.value)   
        if(e.target.name == "date-field") setDate(e.target.value)            
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/categories')
        .then(response => response.json())
        .then(data => {
            setCategories(data)            
        }).then( x => {
            setLoading(false)            
        });
    },[]);

    return (
    loading ? <div> Loading... </div> :
      <div>
          <NavBar/>
          <Container>          
          <h1>Add an Expense</h1>          
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleChange} value={description} name="description-field" type="text" placeholder="Enter Expense Description" />                    
                </Form.Group>
                <Form.Group controlId="formGroupCategory">
                    <Form.Label>Category</Form.Label>
                    <select onChange={handleChange}>                                                
                        {categories.map(x => <option>{x.name}</option>)}                   
                    </select>
                </Form.Group>
                <Form.Group controlId="formGroupCategory">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={handleChange} type="date" name="date-field" placeholder="Enter Date" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Container>
      </div>
    );
  }
  
export default Expenses;