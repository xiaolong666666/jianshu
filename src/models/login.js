export default {

    namespace: 'login',

    state: {
        loginFlag: false,
        msg: null,
    },

    reducers: {
        'yes'(state, action) {
            return {
                ...state,
                loginFlag: true
            }
        },
        'no'(state, action) {
            return {
                ...state,
                loginFlag: false
            }
        },
        'error'(state, action) {
            return {
                ...state,
                msg: action.msg
            }
        },
        'clearerror'(state, action) {
            return {
                ...state,
                msg: null
            }
        }
    }

}