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

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
