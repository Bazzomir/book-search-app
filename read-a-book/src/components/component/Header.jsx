import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../../assets/image/logo.png';
import logo from '../../assets/image/read-a-book.png';
// import logoIcon from '../../assets/image/logo-icon.png';
import logoIcon from '../../assets/image/read-a-book-icon.png';
import searchIcon from '../../assets/image/searchIcon.png';

export default function Header({ onSearch }) {

    const [searchBook, setSearchBook] = useState('');
    // const [menuOpen, setMenuOpen] = useState(false);

    const handleSearchBook = (event) => {
        setSearchBook(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchBook);
    };

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    // const [genres, setGenres] = useState([]);
    // const location = useLocation();

    // const getGenres = async () => {
    //     try {
    //         const response = await fetch('/books.json', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             },
    //         });

    //         const json = await response.json();
    //         const uniqueGenres = [...new Set(json.map(book => book.genre))].sort();
    //         setGenres(uniqueGenres);

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     getGenres();
    // }, []);

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

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex w-100 justify-content-between px-1 px-md-3 px-lg-5 mb-0">
                        <a className="navbar-brand d-none d-lg-block" href="/">
                            <img src={logo} alt="Logo" className="d-inline-block navbar-brand__logo" />
                        </a>
                        {/* <ul className="d-flex justify-content-center align-items-lg-center gap-3 gap-lg-5 flex-column-reverse flex-lg-row"> */}
                        {/* <li className="nav-item dropdown me-lg-4">
                                <a className="nav-link dropdown-toggle text-22" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genres of Books
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {genres.map((genre, index) => {
                                        const isActive = location.pathname.includes(`/genre/${genre}`);
                                        return (
                                            <li key={index}>
                                                <Link className={`dropdown-item ${isActive ? 'active-genre' : ''}`} to={`/genre/${genre}`}>
                                                    {genre}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li> */}
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
