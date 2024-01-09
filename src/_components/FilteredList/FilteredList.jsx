import React from 'react';
import { ListOptions, MediaItem } from '../index';
import { useSelector } from "react-redux";
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

const SORT_OPTIONS = {
    ASC: 'ASC',
    DESC: 'DESC'
};

export function FilteredList({ isGridMode }) {
    const list = useSelector((state) => state?.list?.data?.results || []);
    const sortOption = useSelector((state) => state?.list?.sortOption || 'ASC');
    const search = useSelector((state) => state?.list?.search || '');
    const category = useSelector((state) => state?.list?.category || '');

    const formatYear = (year) =>
        moment(year, "YYYYMMDD").format("YYYY");

    const matchByCategory = (type) => {
        return !category || type === category
    };

    const getFilteredList = () => (
        list.filter(({ Title, Year, Type }) =>
            (Title?.toLowerCase().includes(search.toLowerCase())
                || formatYear(Year).includes(search.toLowerCase())
            ) && matchByCategory(Type)
        ).sort((a, b) =>
            sortOption === SORT_OPTIONS.DESC
                ? b.Title.localeCompare(a.Title)
                : a.Title.localeCompare(b.Title)
        )
    );

    const filteredList = getFilteredList();

    return (
        <>
            <ListOptions />
            <Row>
                {filteredList.map((item, index) => (
                    <Col key={item.imdbID} md={isGridMode ? 4 : 12}>
                        <MediaItem item={item} index={index} filteredList={filteredList} />
                    </Col>
                ))}
            </Row>
        </>
    )
};