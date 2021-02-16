import {request} from 'api/request';
// mv地址
export function topSongs({type}) {
    return request({
      url: '/top/song',
      method: 'get',
      params:{
          type
      }
    });
  }
