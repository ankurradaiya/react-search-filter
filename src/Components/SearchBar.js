import React, { useState } from "react";
import "./SearchBar.css";
import * as Icon from 'react-bootstrap-icons';
import Item from './Item';
import { Row,Col,Card } from 'react-bootstrap';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter =
      data.filter(item =>
        item.id.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.address.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.pincode.toLowerCase().includes(searchWord.toLowerCase()) 
        
      ).map(item => {
       
        let newId = item.id.replace(
          new RegExp(searchWord, 'gi'),
          match =>
            `<mark>${match}</mark>`
        )
        let newName = item.name.replace(
          new RegExp(searchWord, 'gi'),
          match =>
            `<mark>${match}</mark>`
        )
   
        let newAddress = item.address.replace(
          new RegExp(searchWord, 'gi'),
          match =>
            `<mark>${match}</mark>`
        )
        let newPincode = item.pincode.replace(
          new RegExp(searchWord, 'gi'),
          match =>
            `<mark>${match}</mark>`
        )

        let newproduct = item.items.map((prod ,i) => { 
           return( prod.product.toLowerCase().includes(searchWord.toLowerCase()) ?  
                  prod.product.replace(
                  new RegExp(searchWord, 'gi'),
                  match =>
                    `<mark>${match} </mark>`
                ) : null
           )
        })
         
        return {
          ...item,
          id: newId,
          name: newName,
          address: newAddress,
          pincode: newPincode,
          //eslint-disable-next-line
          product : newproduct != "" ? newproduct + " found in items" : null
        }
      })

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
        <Row>
        <Col sm={12}>
        <div className="search">
          <div className="searchInputs">
            <Icon.Search /> 
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length !== 0 && (
                  <Icon.X id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>

          {filteredData.length <=0 && wordEntered.length >0 && (
            <div className="dataResult">
                  <Card style={{ margin: '0.5rem 0', padding: '1px' }}>
                  <Card.Body>
                      <Card.Text>
                         No User Found
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
          )}
          
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((post, key) => {
                return (
                  <Item
                    key={post.id}
                    id={post.id}
                    name={post.name}
                    product={post.product}
                    address={post.address}
                    pincode={post.pincode}
                  />
                );
              })}
            </div>
          )}
        </div>
        </Col>  
        </Row>
  );
}

export default SearchBar;
