/*
 * @Description: 
 * @Author: superman
 * @Date: 2020-04-01 13:59:37
 * @LastEditors: superman
 * @LastEditTime: 2020-04-02 00:43:32
 */
// DOMContentLoaded事件的触发是在DOM和CSSOM都完成时触发
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
// load是在页面上的所有资源都已经加载完成才触发
window.addEventListener('load', (event) => {
  console.log('all sources loaded');
});
console.log('index');
