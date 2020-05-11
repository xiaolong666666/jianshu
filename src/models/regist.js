export default {
    
    namespace: 'regist',

    state: {
        userNametips: null,
        userPhonetips: null,
        userPwdtips: null
    },

    reducers: {
        'userNametips'(state, action){
            return {
                ...state,
                userNametips: action.tips
            }
        },
        'clearuserNametips'(state, action){
            return {
                ...state,
                userNametips: null
            }
        },
        'userPhonetips'(state, action){
            return {
                ...state,
                userPhonetips: action.msg
            }
        },
        'clearuserPhonetips'(state, action){
            return {
                ...state,
                userPhonetips: null
            }
        },
        'pwdsmall'(state, action) {
            return {
                ...state,
                userPwdtips: "small"
            }
        },
        'pwdmiddle'(state, action){
            return {
                ...state,
                userPwdtips: "middle"
            }
        },
        'pwdbig'(state, action){
            return {
                ...state,
                userPwdtips: "big"
            }
        },
        'pwd'(state, action) {
            return {
                ...state,
                userPwdtips: null
            }
        }
    }
}