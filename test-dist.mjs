// 测试 ES Module 格式
import { Solar, Lunar } from './dist/index.mjs';

// 测试 Solar -> Lunar
console.log('\n=== 测试公历转农历 ===');
const solar = Solar.fromYmd(2024, 1, 24);
console.log('公历:', solar.toFullString());
console.log('转换农历:', solar.getLunar().toFullString());

// 测试 Lunar -> Solar
console.log('\n=== 测试农历转公历 ===');
const lunar = Lunar.fromYmd(2023, 12, 14);  // 对应 2024-1-24
console.log('农历:', lunar.toFullString());
console.log('转换公历:', lunar.getSolar().toFullString());

// 测试其他 Lunar 功能
console.log('\n=== 测试农历其他功能 ===');
console.log('八字:', lunar.getBaZi().join(' '));
console.log('当前日期节气:', lunar.getJieQi());

// 测试小寒节气
console.log('\n=== 测试节气 ===');
const xiaoHan = Solar.fromYmd(2024, 1, 6);  // 小寒
const lunarXiaoHan = xiaoHan.getLunar();
console.log('小寒日期:', xiaoHan.toFullString());
console.log('节气:', lunarXiaoHan.getJieQi());

// 测试大寒节气
const daHan = Solar.fromYmd(2024, 1, 20);   // 大寒
const lunarDaHan = daHan.getLunar();
console.log('大寒日期:', daHan.toFullString());
console.log('节气:', lunarDaHan.getJieQi());

console.log('\n=== 测试年月日柱 ===');
console.log('年柱:', lunar.getYearInGanZhi());
console.log('月柱:', lunar.getMonthInGanZhi());
console.log('日柱:', lunar.getDayInGanZhi());
