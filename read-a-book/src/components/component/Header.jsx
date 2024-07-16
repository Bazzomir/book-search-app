import React, { useState } from 'react';
import logo from '../../assets/image/logo/logo.png';
import logoIcon from '../../assets/image/logo/logo-small.png';
import searchIcon from '../../assets/image/searchIcon.png';

export default function Header({ onSearch }) {

    const [searchBook, setSearchBook] = useState('');

    const handleSearchBook = (event) => {
        setSearchBook(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchBook);
    };


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="d-lg-none">
                    <img src={logoIcon} alt="Logo" className="d-inline-block navbar-brand__logo--icon" />
                    <a className="navbar-brand" href="/">Home</a>
                </div>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex w-100 justify-content-between px-1 px-md-3 px-lg-5 mb-0">
                        <a className="navbar-brand d-none d-lg-block" href="/">
                            <img src={logo} alt="Logo" className="d-inline-block navbar-brand__logo" />
                        </a>
                        <form className="form d-flex mt-3 mt-lg-0 ms-lg-4" role="search" onSubmit={handleSubmit}>
                            <input className="form-control search-bar" type="search" placeholder="Find your favorite book..." aria-label="Search" value={searchBook}
                                onChange={handleSearchBook} />
                            <button className="btn search-btn" type="submit">
                                <img className="search-btn__icon" src={searchIcon} alt="Search icon" width="24" height="24" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}
