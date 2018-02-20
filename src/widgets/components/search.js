import React from 'react';
import './search.css';

//function Search(props){
//    return (
//        <form action=""></form>
//        )
//}
//otra formamejor de hacer lo de arriba es lo que sale abajo

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handlesubmit}
        >
        <input 
        ref={props.setRef}
        type="text" 
        placeholder="busca tu video favorito"
        className="Search-input"
        name="search"
        onChange={props.handleChange}
        value={props.value}
        //defaultValue="José támara"

        />
    </form>
    )

export default Search;