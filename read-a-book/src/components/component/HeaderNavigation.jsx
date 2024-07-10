import React from 'react';

export default function HeaderNavigation() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <ul>
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Find your favorite book..." aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <img alt="Search icon" width="24" height="24" />
                        </button>
                    </form>
                </ul>
            </div>
        </nav>
    )
}