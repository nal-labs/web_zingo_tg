import {MissionInfoVo} from '../interface/mission'
import http from "@/utils/request";

export const getMissionList = (params: {initData: string}) => {
  return http.get<MissionInfoVo>(`/mission/list`, params);
}

export const missionItemClaim = (params:{initData:string}) => {
  return http.post(`/mission/claim`, params);
}