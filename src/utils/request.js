import axios from 'axios'

export const request = (params) =>{
  return new Promise((resolve,reject)=>{
    axios({
      url: params.url,
      method: params.methods,
      data: params.data,
      params: params.params
    }).then(res=>{
      resolve(res.data)
    }).catch(()=>{
      reject()
    })
  })
}