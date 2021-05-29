import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/game/version/list',
    method: 'get',
    params: query
  })
}

export function getById(id) {
  return request({
    url: '/game/version/detail',
    method: 'get',
    params: { id }
  })
}

export function updateSort(data) {
  return request({
    url: '/game/version/updateSort',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/game/version/add',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/game/version/update',
    method: 'post',
    data
  })
}

export function deleteById(id) {
  return request({
    url: '/game/version/delete',
    method: 'get',
    params: id
  })
}
