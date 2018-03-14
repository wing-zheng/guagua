import * as types from '../action-types'
let initState={
    list:{
        computers:[],
        musics:[],
        other:[],
        offset: 0,
        limit: 7,
        loading: false,
        hasMore:true
    }
};
export default function (state=initState,action) {
   switch (action.type){

       case types.GET_COMPUTERS_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   computers:action.computers,

               }
           };
       case types.GET_MUSICS_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   musics:action.musics,

               }
           };
       case types.GET_OTHER_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   other:action.other,

               }
           };
       case types.GET_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   loading:true

               }
           };
       case types.GET_LIST_SUCCESS:
           return {
               ...state,
               list:{
                   ...state.list,
                   loading:false,
                   hasMore:action.list.hasMore,
                   offset:state.list.offset + action.list.computers.length,

               }
           };
       default:
           return state
   }
}