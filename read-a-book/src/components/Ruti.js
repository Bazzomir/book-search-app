import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/pages/Homepage';

export default function Ruti() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
        </Routes>
    )
}