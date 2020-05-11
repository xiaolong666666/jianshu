export default {
    name: 'detail',

    state: {
        title: null,
        content: null,
        error: null
    },

    reducers: {
        'fetch_success'(state, action) {
            return {
                ...state,
                title: action.payload.title,
                content: action.payload.content
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