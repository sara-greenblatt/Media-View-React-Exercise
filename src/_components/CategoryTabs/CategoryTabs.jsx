import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { listActions } from '../../_actions';

export function CategoryTabs({ countByType }) {
    const [key, setKey] = useState('name');
    const dispatch = useDispatch();

    const applyCategory = (_key) => {
        if (_key !== key) {
            setKey(_key);
            dispatch(listActions.setCategory(_key !== 'name' ? _key : ''))
        }
    };

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => applyCategory(k)}
            className="mb-3"
        >
            <Tab eventKey="name" title="All (Alphabet Order)" />
            {Object.keys(countByType).map((category) => (
                <Tab eventKey={category} title={category} />
            ))}
        </Tabs>
    );
}
