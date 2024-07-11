import React, { useState, useEffect } from 'react';
import Card from '../Card';

export default function Homepage() {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('books.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const json = await response.json();
            setData(json);
            console.table("Json Data:", json)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12 p-2">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-around align-items-center gap-5 m-0 py-2">
                        {data && data.length > 0 ? (
                            data.map((book, index) => (
                                <Card key={index} book={book} />
                            ))
                        ) : (
                            //Tuka treba Page NotFound da bidi
                            <p>Loading data...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}