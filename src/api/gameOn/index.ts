import {GameInfoVo} from '../interface/gameOn'
import http from "@/utils/request";

export const getMissionList = (params:any) => {
  return http.get<GameInfoVo>(`/game/list`, params);
}

export const missionItemClaim = (params:{initData:string}) => {
  return http.post(`/game/updateClickCount`, params);
}