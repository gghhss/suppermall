import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url:'./api/n3/home/multidata'
  })
}