import axios from 'axios'

export default {
    namespace: 'search',

    state: {
        searchFlag: false,
        mouseIn: false,
        betaFlag: false,
        hot: null,
        error: null,
        page: null,
        pageNums: null,
    },

    reducers: {
        'focus'(state, action) {
            return {
                ...state,
                searchFlag: true
            }
        },
        'blur'(state, action) {
            return {
                ...state,
                searchFlag: false
            }
        },
        'over'(state, action) {
            return {
                ...state,
                mouseIn: true
            }
        },
        'out'(state, action) {
            return {
                ...state,
                mouseIn: false
            }
        },
        'betaOk'(state, action) {
            return {
                ...state,
                betaFlag: true
            }
        },
        'betaNo'(state, action) {
            return {
                ...state,
                betaFlag: false
            }
        },
        'hotsuccess'(state, action) {
            return {
                ...state,
                hot: action.hot,
                page: 0,
                pageNums: Math.ceil(action.hot.length/10) 
            }
        },
        'hoterror'(state, action) {
            return {
                ...state,
                error: action.error
            }
        },
        'hotchange'(state, action) {
            if(action.page<(state.pageNums-1)){
                return {
                    ...state,
                    page: action.page + 1
                }
            }else{
                return {
                    ...state,
                    page: 0
                }
            }
        },
    },

    effects: {
        *'hot'({payload},{call,put}){
            try{
                const hot = yield call(axios.get, '/api/hot');
                yield put({ type: 'hotsuccess', hot: hot.data.hotList.data });
            }catch(error){
                yield put({ type: 'hoterror', error });
            }
        }
    }
}