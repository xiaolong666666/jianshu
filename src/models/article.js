import axios from 'axios'

export default {
    namespace: 'article',

    state: {
        article: null,
        error: null,
        page: null
    },

    reducers: {
        'fetch_success'(state, action) {
            return {
                ...state,
                article: action.article,
                page: 0
            }
        },
        'fetch_error'(state, action) {
            return {
                ...state,
                error: action.error
            }
        },
        'more_success'(state, action) {
            return {
                ...state,
                article: state.article.concat(action.moreArticle),
                page: state.page+1
            }
        },
        'more_error'(state, action) {
            return {
                ...state,
                error: action.error
            }
        }
    },

    effects: {
        *'more'({payload,x},{call,put}){
            try{
                const moreArticle = yield call(axios.get, "/api/articlemore?page="+payload);
                yield put({ type: 'more_success', moreArticle: moreArticle.data.articleMore.data });
            }catch(e){
                yield put({ type: 'more_error', error: e });
            }
        }
    }
}