import {request} from '../utils/request.js'
export const readMd = async() =>{
  return await request({
    url: '/data-screen.md'
  })
}