import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state = {
        value: 'José Támara'
    }
    handlesubmit = event => {
        event.preventDefault();
        console.log(this.input.value, 'submit')
    }
    setInputRef = element => {
        this.input = element;
    }
    handleInputChange = event =>{
        this.setState({
            //value: event.target.value.replace(' ', '-')
            value: event.target.value
        })
    }
    render() {
        return (
                <Search 
                setRef={this.setInputRef}
                handlesubmit={this.handlesubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
                />
            )
    }
}

export default SearchContainer;