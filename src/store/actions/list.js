import * as types from '../action-types'
import {ajax} from '../../utils'
let Host= 'http://localhost:3000';
export default {
    /*loadMore(url){
        return (dispatch,getState)=>{
            let {
                list:{
                    offset,
                    limit,
                    loading,
                    hasMore
                }
            }=getState();
            if(!loading && hasMore){
                dispatch({
                    type:types.GET_LIST
                });
                ajax({
                    url:`${Host}${url}:offset=${offset}&limit=${limit}`,
                    method:'get'
                }).then(list=>{

                    dispatch({
                        type:types.GET_LIST_SUCCESS,
                        list,

                    })
                })

            }


        }
    },*/

    getLiuyanList(url){
        return (dispatch,getState)=>{
            ajax({
                url:`${Host}${url}`,
                method:'get'
            }).then(ly=>{
                dispatch({
                    type:types.GET_COMPUTERS_LIST,
                    ly,

                })
            })
        }

    },
    getComputersList(url){
        return (dispatch,getState)=>{
            ajax({
                url:`${Host}${url}`,
                method:'get'
            }).then(computers=>{
                dispatch({
                    type:types.GET_COMPUTERS_LIST,
                    computers,

                })
            })
        }

    },
    getMusicsList(url){
        return (dispatch,getState)=>{
            ajax({
                url:`${Host}${url}`,
                method:'get'
            }).then(musics=>{
                dispatch({
                    type:types.GET_MUSICS_LIST,
                    musics,

                })
            })
        }

    },
    getOtherList(url){
        return (dispatch,getState)=>{
            ajax({
                url:`${Host}${url}`,
                method:'get'
            }).then(other=>{
                dispatch({
                    type:types.GET_OTHER_LIST,
                    other,

                })
            })
        }
    }
}