const findPageData = {}

// 获取用户信息
export function getUser() {
  return {
    url: 'http://localhost:8080/user',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'id': '@increment', 
        'name': '@name', // 随机生成姓名
        'email': '@email', // 随机生成姓名
        'age|10-20': 12
        // 其他数据
      }
    }
  }
}

export function save() {
  return {
    url: 'http://localhost:8080/user/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}// 删除
export function del() {
  return {
    url: 'http://localhost:8080/user/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 分页查询
export function findPage() {
  return {
    url: 'http://localhost:8080/user/findPage',
    type: 'post',
    data: findPageData
  }
}