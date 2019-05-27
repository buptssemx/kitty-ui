import axios from '../axios'

/* 
 * 用户管理模块
 */

export const save = (params)=>{
    return axios({
        url:'/user/save',
        method:'post',
        params
    })
}

export const del = (params)=>{
    return axios({
        url:'/user/delete',
        method:'post',
        params
    })

}

export const findPage = (params)=>{
    return axios({
        url:'/user/findPage',
        method:'post',
        params
    })
}

export const getUser = () => {
    return axios({
        url: '/user',
        method: 'get'
    })
}