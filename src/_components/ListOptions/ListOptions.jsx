import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../../_actions';

export function ListOptions(props) {
    const dispatch = useDispatch();
    const sortOption = useSelector((state) => state?.list?.sortOption || 'ASC');
    const search = useSelector((state) => state?.list?.search || '');

    const setSearch = (ev) => {
        dispatch(listActions.searchMediaItem(ev.target.value));
    };

    const handleClear = () => {
        dispatch(listActions.clearSearch());
    };

    const handleRefresh = () => {
        dispatch(listActions.getMediaList());
    };

    const changeSortOption = () => {
        dispatch(listActions.setSortOption(sortOption === 'ASC' ? 'DESC' : 'ASC'));
    };

    return (
        <div className="row">
            <input
                className="col-3 form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={setSearch}
                value={search}
            />
            <Button variant="outline-danger" onClick={handleClear}>Clear</Button>
            <Button variant="outline-danger" onClick={handleRefresh}>Refresh</Button>
            <Button variant="outline-danger" onClick={changeSortOption}>
                {sortOption === 'DESC' ? 'Ascending' : 'Descending'} Order
            </Button>
        </div>
    )
};