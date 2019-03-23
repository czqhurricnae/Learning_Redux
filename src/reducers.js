import {CREATE_POST, EDIT_POST, SET_FILTER} from './actionTypes';


function postReducer (state = [], action) {
    switch (action.type) {
        case CREATE_POST: {
            const {type, ...post} = action;
            return [...state, post];
        }
        case EDIT_POST: {
            const {type, id, ...newPost} = action;
            return state.map((oldPost, index) =>
                             action.id === index ? {...oldPost, ...newPost}
                                                      : oldPost);
        }
        default: return state;
    }
}

function filterReducer (state = 'all', action) {
    if (action.type === SET_FILTER) {
        return action.type;
    } else {
        return state;
    }
}

function appReducer (state = {}, action) {
    return {
        posts: postReducer(state.posts, action),
        filter: filterReducer(state.filter, action),
    };
}

export default appReducer;
