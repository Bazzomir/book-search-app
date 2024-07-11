import React from 'react';
import logo from '../../assets/image/logo.png'
import logoIcon from '../../assets/image/logo-icon.png'
import search from '../../assets/image/search.png'


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="d-lg-none" >
                    <img src={logoIcon} alt="Logo" className="d-inline-block navbar-brand__logo--icon" />
                    <a className="navbar-brand" href="#">Home
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-flex w-100 justify-content-between px-1 px-md-3 px-lg-5 mb-0">
                        <a className="navbar-brand d-none d-lg-block" href="#">
                            <img src={logo} alt="Logo" className="d-inline-block navbar-brand__logo" />
                        </a>
                        <ul className="d-flex justify-content-center align-items-lg-center gap-3 gap-lg-5 flex-column-reverse flex-lg-row">
                            <li className="nav-item dropdown me-lg-4">
                                <a className="nav-link dropdown-toggle text-22" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <form className="d-flex mt-3 mt-lg-0 ms-lg-4" role="search">
                                <input className="form-control search-bar" type="search" placeholder="Find your favorite book..." aria-label="Search" />
                                <button className="btn search-btn" type="submit">
                                    <img src={search} alt="Search icon" width="24" height="24" />
                                </button>
                            </form>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav >

    )
}