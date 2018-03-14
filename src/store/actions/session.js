import {register,login,TjPost,GetLy} from '../../api/session';
import * as types from  '../action-types';
import {push} from 'react-router-redux'
export default {
    getLiuyanList(){
        return function (dispatch, getStatus) {
            GetLy().then(data => {
                let {code,...session} = data;//code user success error
                let {success,lys}=session;
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//留言获取成功了,跳转到登录页 action creator                    
                    console.log("留言获取成功!!!!");
                    return lys
                }
                if (code == 1) {//注册成功了,跳转到登录页 action creator
                    console.log("留言内容为空")
                    
                }
            });
        }
    },
    register(user){
        return function (dispatch, getStatus) {
            register(user).then(data => {
                let {code, ...session} = data;//code user success error
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//注册成功了,跳转到登录页 action creator
                    dispatch(push('/login'));
                }
                if (code == 1) {//注册成功了,跳转到登录页 action creator
                    alert("用户名已被其他用户占用，请换个");
                    dispatch(push('/login'));
                }
            });
        }
    },
    login(user){
        return function (dispatch, getStatus) {
            login(user).then(data => {
                let {code, ...session} = data;//code user success error
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//登录成功了,跳转到个人中心页
                    dispatch(push('/profile'));
                }
            });
        }
    },
    TjPost(user){
        return function (dispatch, getStatus) {
            TjPost(user).then(data => {
                let {code, ...session} = data;//code user success error
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (data) {//留言成功了,跳转到留言页 action creator
                    dispatch(push('/lySuccess'));
                }
            });
        }
    },
}