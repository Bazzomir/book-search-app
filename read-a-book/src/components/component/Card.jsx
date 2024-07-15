import React from 'react';

export default function Card({ book }) {
    return (
        <div className="card px-0">
            {/* <div className="card-header">{book.id}</div> */}
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Title: {book.title}</li>
                <li className="list-group-item">Author: {book.author}</li>
                <li className="list-group-item">Genre: {book.genre}</li>
            </ul>
        </div>
    );
}