import { listConstants } from '../_constants';
import { listService } from '../_services';

export const listActions = {
    getMediaList,
    searchMediaItem,
    clearSearch,
    setSortOption,
    updateMediaItem,
    setCategory
};

function getMediaList() {
    console.log('hello world');
    return dispatch => {
        dispatch(request());

        listService.getMediaList()
            .then(items => dispatch(success(items)))
            .catch(error => dispatch(failure(error?.toString())));
    };

    function request() { return { type: listConstants.GET_MEDIA_LIST_REQUEST } }
    function success(payload) { return { type: listConstants.GET_MEDIA_LIST_SUCCESS, payload } }
    function failure(error) { return { type: listConstants.GET_MEDIA_LIST_FAILURE, error } }
}

function searchMediaItem(searchText) {
    return dispatch => {
        dispatch(success(searchText));
    };

    function success(payload) { return { type: listConstants.SET_SEARCH, payload } }
}

function clearSearch() {
    return dispatch => {
        dispatch(success());
    };

    function success() { return { type: listConstants.CLEAR_SEARCH } }
}

function setSortOption(sortOption) {
    return dispatch => {
        dispatch(success(sortOption));
    };

    function success(payload) { return { type: listConstants.SET_SORT_OPTION, payload } }
}

function setCategory(category) {
    return dispatch => {
        dispatch(success(category));
    };

    function success(payload) { return { type: listConstants.SET_CATEGORY, payload } }
}

function updateMediaItem(payload) {
    return dispatch => {
        dispatch(request());

        listService.update(payload)
            .then(newList => dispatch(success(newList)))
            .catch(error => dispatch(failure(error?.toString())));
    };

    function request() { return { type: listConstants.UPDATE_MEDIA_ITEM_REQUEST } }
    function success(payload) { return { type: listConstants.UPDATE_MEDIA_ITEM_SUCCESS, payload } }
    function failure(error) { return { type: listConstants.UPDATE_MEDIA_ITEM_FAILURE, error } }
}
