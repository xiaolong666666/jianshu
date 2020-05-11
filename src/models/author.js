export default {
    namespace: 'author',

    state: {
        author: null,
        error: null,
        page: null,
        pageNum: null
    },

    reducers: {
        'fetch_success'(state, action) {
            return {
                ...state,
                author: action.author,
                page: 0,
                pageNum: Math.ceil(action.author.length/5)
            }
        },
        'fetch_error'(state, action) {
            return {
                ...state,
                error: action.error
            }
        },
        'change'(state, action) {
            if(action.page<(state.pageNum-1)){
                return {
                    ...state,
                    page: state.page + 1
                }
            }else{
                return {
                    ...state,
                    page: 0
                }
            }
        },
    }
}