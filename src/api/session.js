import {post} from './index';
export function register(user){
  return post('/register',user);
}
export function login(user){
  return post('/login',user);
}

// 留言板
export function TjPost(info){
  return post('/lys',info);
}
export function GetLy(){
  return post('/lysGet');
}