export default {
    namespace: 'Aa',

    state: {
        AaFlag: false,
        nightFlag: false,
        songFont: false,
        simpleFlag: true
    },

    reducers: {
        'AaShow'(state, action) {
            return {
                ...state,
                AaFlag: true
            }
        },
        'AaHide'(state, action) {
            return {
                ...state,
                AaFlag: false
            }
        },
        'nightShow'(state, action) {
            return {
                ...state,
                nightFlag: true
            }
        },
        'nightHide'(state, action) {
            return {
                ...state,
                nightFlag: false
            }
        },
        'songShow'(state, action) {
            return {
                ...state,
                songFont: true
            }
        },
        'songHide'(state, action) {
            return {
                ...state,
                songFont: false
            }
        },
        'simpleShow'(state, action) {
            return {
                ...state,
                simpleFlag: true
            }
        },
        'simpleHide'(state, action) {
            return {
                ...state,
                simpleFlag: false
            }
        },
    }
}