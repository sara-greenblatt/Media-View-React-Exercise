import { listConstants } from '../_constants';

const initialState = {
    loading: false,
    error: false,
    items: []
}

export function list(state = initialState, action) {
    switch (action.type) {
        case listConstants.GET_MEDIA_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case listConstants.GET_MEDIA_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            };
        case listConstants.SET_SORT_OPTION:
            return {
                ...state,
                sortOption: action.payload
            };
        case listConstants.SET_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        case listConstants.CLEAR_SEARCH:
            return {
                ...state,
                search: ''
            };
        case listConstants.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case listConstants.UPDATE_MEDIA_ITEM_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.list?.data || {},
                    results: action.payload
                }
            };
        default:
            return state
    }
};