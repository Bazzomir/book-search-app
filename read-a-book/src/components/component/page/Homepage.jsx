import React, { useState, useEffect, useCallback } from 'react';
import Papa from 'papaparse';
import Card from '../Card';
import Header from '../Header';
import Footer from '../Footer';
import Lottie from 'react-lottie';
import noResultsFound from '../../../assets/image/animation/noResultsFound.json';

export default function Homepage() {

    const [data, setData] = useState([]);
    const [sortOption, setSortOption] = useState('author');
    const [filteredData, setFilteredData] = useState([]);
    const [searchBook, setSearchBook] = useState('');

    const getJsonData = async () => {
        try {
            const response = await fetch('/books.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            return await response.json();

        } catch (error) {
            console.error('Error fetching JSON data:', error);
            return [];
        }
    };

    const getCSVData = async () => {
        try {
            const response = await fetch('/books.csv');
            const csvText = await response.text();
            return Papa.parse(csvText, { header: true }).data;
        } catch (error) {
            console.error('Error fetching CSV data:', error);
            return [];
        }
    };

    const mergeData = (jsonData, csvData) => {
        const csvDataById = csvData.reduce((item, book) => {
            item[book.id] = book;
            return item;
        }, {});

        return jsonData.map(book => ({
            ...book,
            ...csvDataById[book.id],
        }));
    };

    const getData = useCallback(async () => {
        const [jsonData, csvData] = await Promise.all([getJsonData(), getCSVData()]);
        const mergedData = mergeData(jsonData, csvData);
        setData(mergedData);
        setFilteredData(mergedData);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleSearch = (query) => {
        setSearchBook(query);
        const lowercased = query.toLowerCase();
        const filteredBooks = data.filter(book =>
            book.title.toLowerCase().includes(lowercased) ||
            book.author.toLowerCase().includes(lowercased) ||
            book.genre.toLowerCase().includes(lowercased)
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

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: noResultsFound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <Header onSearch={handleSearch} data={data} />
            <div className="container min-vh-100">
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
                                <div className="row justify-content-center align-items-center">
                                    <Lottie
                                        className="col-12"
                                        options={defaultOptions}
                                        height={400}
                                        width={400}
                                    />
                                    <h1 className="col-12 text-center">SORRY!</h1>
                                    <h2 className="col-12 text-center">No results found...</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
