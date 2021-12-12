export function friendlyDate(datsStr) {
  let dateObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr);
  let time = dateObj.getTime();
  let now = Date.now();
  let span = now - time;
  let str = '';

  switch (true) {
    case span < 60000:
      str = '刚刚';
      break;
    case span < 1000 * 3600:
      str = Math.floor(span / 60000) + '分钟前';
      break;
    case span < 1000 * 3600 * 24:
      str = Math.floor(span / (1000 * 3600)) + '小时前';
      break;
    default:
      str = Math.floor(span / (1000 * 3600 * 24)) + '天前';
  }
  return str;
}
