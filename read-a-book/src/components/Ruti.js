import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/pages/Homepage';
import NotFound from './component/pages/NotFound';

export default function Ruti() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/genre/:genre" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="" element={""} />
            <Route path="" element={""} /> */}
        </Routes>
    )
}