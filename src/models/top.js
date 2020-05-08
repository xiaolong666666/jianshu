export default {
    namespace: 'top',

    state: {
        topFlag: false,
        topTips: false
    },

    reducers: {
        'show'(state, action) {
            return {
                ...state,
                topFlag: true
            }
        },
        'hide'(state, action) {
            return {
                ...state,
                topFlag: false
            }
        },
        'over'(state, action) {
            return {
                ...state,
                topTips: true
            }
        },
        'out'(state, action) {
            return {
                ...state,
                topTips: false
            }
        }
    }
}