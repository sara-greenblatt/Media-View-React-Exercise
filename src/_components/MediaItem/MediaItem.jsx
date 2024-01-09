import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listActions } from '../../_actions';
import moment from 'moment';

export function MediaItem({ item, index, filteredList }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [isImgError, setImgError] = useState(false);

    const formatYear = (year) =>
        moment(year, "YYYYMMDD").format("YYYY");

    const selectedItem = (imdbID) => {
        navigate(`/media/${imdbID}`);
    };

    const onEditNameBlur = (event, oldTitle, index) => {
        setNewName('');
        if (newName !== oldTitle) {
            dispatch(listActions.updateMediaItem({
                itemIndex: index,
                newName: event.target.value,
                list: filteredList
            }));
        }
    };

    return (
        <div className="row media-item">
            <div className="col-4 image-container">
                {!isImgError && (
                    <img
                        className="img-fluid"
                        src={item.Poster}
                        alt={item.imdbID}
                        onClick={() => selectedItem(item.imdbID)}
                        onError={() => setImgError(true)}
                    />
                )}
            </div>
            <div className="col-8">
                {!newName ? (
                    <div
                        onClick={() => setNewName(item.Title)}
                        className='media-title'
                    >
                        {item.Title}
                    </div>
                ) : (
                    <input
                        className='form-control'
                        placeholder='Edit title'
                        defaultValue={item.Title}
                        onChange={(event) => setNewName(event.target.value)}
                        onBlur={(event) => onEditNameBlur(event, item.Title, index)}
                    />
                )}
                <div>{`Year: ${formatYear(item.Year)}`}</div>
            </div>
        </div>
    );
};