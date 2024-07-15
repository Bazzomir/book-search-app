import React from 'react';

export default function Card({ book, searchBook }) {
    const { title, author, genre } = book;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{highlightText(title, searchBook)}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{highlightText(author, searchBook)}</h6>
                <p className="card-text">{highlightText(genre, searchBook)}</p>
            </div>
        </div>
    );
}

const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? <span key={index} style={{ color: 'red', fontWeight: 'bold' }}>{part}</span> : part
    );
};