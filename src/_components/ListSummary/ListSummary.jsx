import React from 'react';

export function ListSummary({ countByType }) {
    return (
        <div className='list-summary'>
            <h3>Summary</h3>
            {Object.entries(countByType || {}).map(([category, list]) =>
                <div key={category} className='category'>{`${category} (${list?.length})`}</div>
            )}
        </div>
    );
};