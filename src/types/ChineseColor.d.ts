/**
 * @file types ChineseColor.d.ts
 * @description 中国传统颜色
 * @since 1.0.0
 */

declare namespace CCP.ChineseColor {
  /**
   * @description 中国传统颜色
   * @since 1.0.0
   * @interface Item
   * @property {number[4]} CMYK CMYK颜色值
   * @property {number[3]} RGB RGB颜色值
   * @property {string} hex HEX颜色值
   * @property {string} name 颜色名称
   * @property {string} pinyin 颜色名称拼音
   * @return {Item} 中国传统颜色
   */
  export interface Item {
    CMYK: number[];
    RGB: number[];
    hex: string;
    name: string;
    pinyin: string;
  }
}
