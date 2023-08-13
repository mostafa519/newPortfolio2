const INTIAL_STATE={
    articles:[]
};

export default function articlesReducer(state=INTIAL_STATE,action){
   
    switch(action.type){
        case "SET_ARTICLES":
            return {...state,articles: action.payload}
        default:
            return state;
    }

}