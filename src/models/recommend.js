export default {
    namespace: 'recommend',

    state: {
        recommend: null,
        error: null,
        AppFlag: false
    },

    reducers: {
        'fetch_success'(state, action) {
            return {
                ...state,
                recommend: action.recommend
            }
        },
        'fetch_error'(state, action) {
            return {
                ...state,
                error: action.error
            }
        },
        'changeAppFlag'(state, action){
            return {
                ...state,
                AppFlag: !state.AppFlag 
            }
        }
    }
}