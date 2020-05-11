export default {
    namespace: 'link',

    state: {
        link: null,
        error: null,
    },

    reducers: {
        'fetch_success'(state, action) {
            return {
                ...state,
                link: action.link
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