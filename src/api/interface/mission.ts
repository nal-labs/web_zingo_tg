export interface MissionInfoVo {
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