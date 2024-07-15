import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Header from '../Header';
import Footer from '../Footer';

export default function Homepage() {
    const [data, setData] = useState([]);
    const [sortOption, setSortOption] = useState('author');
    const [filteredData, setFilteredData] = useState([]);
    const [searchBook, setSearchBook] = useState('');

    const getData = async () => {
        try {
            const response = await fetch('/books.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const json = await response.json();
            setData(json);
            setFilteredData(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (query) => {
        setSearchBook(query);
        const lowercasedQuery = query.toLowerCase();
        const filteredBooks = data.filter(book =>
            book.title.toLowerCase().includes(lowercasedQuery) ||
            book.author.toLowerCase().includes(lowercasedQuery) ||
            book.genre.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredData(filteredBooks);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOption === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortOption === 'author') {
            return a.author.localeCompare(b.author);
        } else if (sortOption === 'genre') {
            return a.genre.localeCompare(b.genre);
        }
        return 0;
    });

    return (
        <>
            <Header onSearch={handleSearch} />
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 p-2">
                        <div className="d-flex justify-content-start mb-3">
                            <select value={sortOption} onChange={handleSortChange} className="form-select w-auto">
                                <option value="author">Sort by Author</option>
                                <option value="title">Sort by Title</option>
                                <option value="genre">Sort by Genre</option>
                            </select>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-around align-items-center gap-5 m-0 py-2">
                            {sortedData && sortedData.length > 0 ? (
                                sortedData.map((book, index) => (
                                    <Card key={index} book={book} searchBook={searchBook} />
                                ))
                            ) : (
                                <p>No results found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
