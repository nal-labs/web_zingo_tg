import {TaskInfoVo,SignInVo,InvitationVo} from '../interface/zin'
import http from "@/utils/request";

// 任务列表
export const getTaskList = (params: { initData: null | string;}) => {
  return http.get<TaskInfoVo>(`/task/list`, params);
}

// 任务签到
export const taskListClaim = (params: { initData: null | string; id: null | string}) => {
  return http.post(`/task/claim`, params);
}

// 首次签到
export const taskSignIn = (params: { initData: null | string;}) => {
  return http.post<SignInVo>(`/task/signIn`, params);
}

// 分享
export const invitationUser = (params: { initData: null | string;}) => {
  return http.post<InvitationVo>(`/invitation/invitationUser`, params);
}