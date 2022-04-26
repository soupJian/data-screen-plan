import {request} from '../utils/request.js'
export const readMd = async(textId) =>{
  return await request({
    url: `/md/${textId}.md`
  })
}