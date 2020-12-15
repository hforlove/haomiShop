import { request } from '../utils/request.js'

export function login (data) {
  return request({
    method: 'post',
    url: '/user/login',
    data
  })
}

export function register (data) {
  return request({
    method: 'post',
    url: '/user/register',
    data
  })
}

export function getUserInfo () {
  return request({
    method: 'get',
    url: '/user/info'
  })
}

export function updateUserInfo (data) {
  return request({
    method: 'put',
    url: '/user/info',
    data
  })
}

export function getHomeData (params) {
  return request({
    method: 'get',
    url: '/index-infos',
    params
  })
}

export function getCateGory (params) {
  return request({
    method: 'get',
    url: '/categories',
    params
  })
}

export function getGoodsList (params) {
  return request({
    method: 'get',
    url: '/search',
    params
  })
}

export function getGoodsDetail (id) {
  return request({
    method: 'get',
    url: '/goods/detail/' + id
  })
}

export function getCartList () {
  return request({
    method: 'get',
    url: '/shop-cart'
  })
}

export function getCartByIds (params) {
  return request({
    method: 'get',
    url: '/shop-cart/settle',
    params
  })
}

export function deleteCart (id) {
  return request({
    method: 'delete',
    url: '/shop-cart/' + id
  })
}

export function addCart (data) {
  return request({
    method: 'post',
    url: '/shop-cart',
    data
  })
}

export function editCart (data) {
  return request({
    method: 'put',
    url: '/shop-cart',
    data
  })
}

export function getAddress () {
  return request({
    method: 'get',
    url: '/address'
  })
}

export function getAddressByDefault () {
  return request({
    method: 'get',
    url: '/address/default'
  })
}

export function addAddress (data) {
  return request({
    method: 'post',
    url: '/address',
    data
  })
}

export function deleteAddress (id) {
  return request({
    method: 'delete',
    url: '/address/' + id
  })
}

export function updateAddress (data) {
  return request({
    method: 'put',
    url: '/address',
    data
  })
}

export function getAddressDetail (id) {
  return request({
    method: 'get',
    url: '/address/' + id
  })
}

export function getOrder (params) {
  return request({
    method: 'get',
    url: '/order',
    params
  })
}

export function getOrderDetail (id) {
  return request({
    method: 'get',
    url: '/order/' + id
  })
}

export function cancelOrder (id) {
  return request({
    method: 'put',
    url: `/order/${id}/cancel`
  })
}

export function createOrder (data) {
  return request({
    method: 'post',
    url: '/saveOrder',
    data
  })
}

export function payOrder (params) {
  return request({
    method: 'get',
    url: '/paySuccess',
    params
  })
}
