export interface TaskInfoVo {
  /**
   * 任务内容
   */
  content?: null | string;
  /**
   * 主键
   */
  id?: number | null;
  /**
   * 游戏链接
   */
  jumpLink?: null | string;
  /**
   * logo
   */
  logoUrl?: null | string;
  /**
   * 名称
   */
  name?: null | string;
  /**
   * 任务奖励
   */
  reward?: null | string;
  /**
   * 任务性质 0:一次性任务，1:重复性任务
   */
  taskNature?: number | null;
  [property: string]: any;
}

export interface SignInVo {
  /**
   * 资产
   */
  balance?: null | string;
  /**
   * 货币代码（如 USD, EUR, BTC 等）
   */
  currencyCode?: null | string;
  /**
   * 今日是否签到过
   */
  signFlag?: boolean | null;
  /**
   * tg id
   */
  tgId?: number | null;
  [property: string]: any;
}

export interface InvitationVo {
  /**
   * bot的用户名
   */
  botName?: null | string;
  /**
   * 文案描述
   */
  description?: null | string;
  /**
   * 邀请码
   */
  invitationCode?: null | string;
  /**
   * 分享奖励
   */
  inviteeRewards?: InviteeReward[] | null;
  /**
   * 成功被邀请人列表
   */
  invitees?: Invitee[] | null;
  [property: string]: any;
}

/**
* InviteeReward
*/
export interface InviteeReward {
  /**
   * 道具id
   */
  id?: number | null;
  /**
   * 道具名称
   */
  name?: null | string;
  /**
   * 奖励
   */
  reward?: null | string;
  [property: string]: any;
}

/**
* Invitee
*/
export interface Invitee {
  /**
   * 是否是tg会员
   */
  isPremium?: boolean | null;
  /**
   * 用户头像
   */
  photoUrl?: null | string;
  /**
   * 用户的tg id
   */
  tgId?: number | null;
  /**
   * 用户的tg名称
   */
  tgName?: null | string;
  [property: string]: any;
}