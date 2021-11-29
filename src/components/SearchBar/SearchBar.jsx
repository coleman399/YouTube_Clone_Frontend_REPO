import React, {useState} from 'react';
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
                    <div className="input-group">
                        <input onChange={handleChange} className="form-control"type="text"placeholder="Search"aria-label="Search" value={query}/>
                        <button className="btn btn-light btn-outline-secondary" onClick={e => handleSubmit(e)}>Search</button>
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