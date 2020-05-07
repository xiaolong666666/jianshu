export default {
    namespace: 'author',

    state: {
        author: null,
        error: null,
    },

    reducers: {
        'fetch_success'(state, action) {
            return {
                ...state,
                author: action.author
            }
        },
        'fetch_error'(state, action) {
            return {
                ...state,
                error: action.error
            }
        }
    }
}