export interface GameInfoVo {
  /**
   * 点击次数
   */
  clickNum?: number | null;
  /**
   * 游戏链接
   */
  gameUrl?: null | string;
  /**
   * 主键
   */
  id?: number | null;
  /**
   * logo
   */
  logoUrl?: null | string;
  /**
   * 游戏名称
   */
  name?: null | string;
  /**
   * 宣传图
   */
  promotionalUrl?: null | string;
  [property: string]: any;
}