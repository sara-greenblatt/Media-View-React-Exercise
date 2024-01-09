import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MediaList, MediaPreview } from '../pages';
import './App.scss';

function App() {
    return (
        <div className="jumbotron main">
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<MediaList />} />
                        <Route path="/list" element={<MediaList />} />
                        <Route path="/media" >
                            <Route path=":id" element={<MediaPreview />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export { App };