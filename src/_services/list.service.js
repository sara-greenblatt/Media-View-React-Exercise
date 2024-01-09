
import { callAPI } from '../_helpers';

export const listService = {
    getMediaList,
    update
};

function getMediaList() {
    const { REACT_APP_DATA_PATH } = process.env || {};
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return callAPI(REACT_APP_DATA_PATH, requestOptions)
        .then(handleResponse)
}

function update(payload = {}) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    return callAPI('/media-update', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    const data = response.data;
    if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
};
