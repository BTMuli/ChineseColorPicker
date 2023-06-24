/**
 * @file data index.ts
 * @description 数据层入口文件
 * @since 1.0.0
 */

import ChineseColor from "./chinese-color.json";

const CCPD = {
  Chinese: ChineseColor as CCP.ChineseColor.Item[],
};

export default CCPD;
