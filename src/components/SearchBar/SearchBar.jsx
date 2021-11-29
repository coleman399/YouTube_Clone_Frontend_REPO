import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SearchBar.css';

const SearchBar = (props) => {
    const [query, setQuery] = useState()

    const handleChange = (e) =>{
        setQuery(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.searchVideo(query);
        setQuery('')
    }

    return (
        <nav className="navbar navbar-expend-md navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="col-4">
                    <span className="navbar-brand h1">Home</span>
                </div>
                <div className="col-4">
                    <div className="p-1">
                    <Form id="searchbar" onSubmit={e => handleSubmit(e)}>
                        <InputGroup id="searchbar">
                            <FormControl onChange={handleChange} placeholder="Search..." aria-label="Search..." aria-describedby="searchbar"/>
                            <Button variant="light outline-success" id="searchbar" type="submit">Go</Button>
                        </InputGroup>
                    </Form>
                    </div>
                </div>
                <div className="col-4">
                    <div className="text-end"><span className="navbar-brand h1 text-end">Account</span></div>
                </div>
            </div>
        </nav>
    )
}

export default SearchBar;