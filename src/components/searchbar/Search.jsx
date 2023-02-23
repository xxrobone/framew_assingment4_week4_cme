import React from 'react'
import styled from 'styled-components'
import { RiSearch2Line } from 'react-icons/ri'

const Form = styled.form`
max-width: 29.5rem;
height: 3.125rem;
position: relative;
display: flex;
align-items: center;
border-radius: 30px;
background-color: #646E6D33;

@media screen and (min-width: 769px) {
    width: 29.5rem;
  }


.submit_btn {
    margin-left: 1rem;
    margin-top: 0.5rem;
    padding: 1rem;
    position: relative;
    background: transparent;
    color: #ffffff;
    border: 0;
    border-radius: 50%;
    outline: none;
    font-size: 1.6rem;
    filter: drop-shadow(1px 1px 4px #121212);

    /* :hover,
    :focus {
        cursor: pointer;
        background: radial-gradient(#393939, #1D1E22);
  }  */
}
`;

const Input = styled.input`
margin: 0;
padding: 4px 6px;
font-size: 0.75rem;
border: 0;
border-radius: 5px;
height: 100%;
outline: none;
color: #fff;
background-color: transparent;

&::placeholder {
    color: #fff;   
}
/* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.295); */
`;

const Search = ({games, handleOnChange, handleOnSubmit, searchQuery}) => {
  return (
      <div>
          <Form onSubmit={handleOnSubmit} id="form1">
            <button
              className="submit_btn"
              type="submit"
              form="form1"
              >
                  <RiSearch2Line />
            </button>
            <Input
                className="search" 
                type="text" 
                placeholder="Search anything... "
                onChange={handleOnChange}
                value={searchQuery}
                key={games.id}
            />
            
          </Form>
    </div>
  )
}

export default Search