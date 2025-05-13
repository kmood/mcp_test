import { Injectable } from '@nestjs/common';

// todo  看如何融合到一个utils中，使用  this.utils.timeutils.fun()
@Injectable()
export class TimeutilService {
  formatDate(date: number) {
    const timestamp = new Date(date);
    const YY = timestamp.getFullYear() + '-';
    const MM =
      (timestamp.getMonth() + 1 < 10
        ? '0' + (timestamp.getMonth() + 1)
        : timestamp.getMonth() + 1) + '-';
    const DD =
      timestamp.getDate() < 10
        ? '0' + timestamp.getDate()
        : timestamp.getDate();
    const hh =
      (timestamp.getHours() < 10
        ? '0' + timestamp.getHours()
        : timestamp.getHours()) + ':';
    const mm =
      (timestamp.getMinutes() < 10
        ? '0' + timestamp.getMinutes()
        : timestamp.getMinutes()) + ':';
    const ss =
      timestamp.getSeconds() < 10
        ? '0' + timestamp.getSeconds()
        : timestamp.getSeconds();
    return YY + MM + DD + ' ' + hh + mm + ss;
  }

  getNow(now?: Date) {
    if (!now) {
      now = new Date();
    }
    const timeString =
      now.getFullYear() +
      '-' +
      ('0' + (now.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + now.getDate()).slice(-2) +
      ' ' +
      ('0' + now.getHours()).slice(-2) +
      ':' +
      ('0' + now.getMinutes()).slice(-2) +
      ':' +
      ('0' + now.getSeconds()).slice(-2) +
      '.' +
      ('00' + now.getMilliseconds()).slice(-3);
    return timeString;
  }
  getWeekday(date: Date) {
    // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
  }

  getMonth(date: Date) {
    // const months = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July',
    //   'August',
    //   'September',
    //   'October',
    //   'November',
    //   'December',
    // ];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return months[date.getMonth()];
  }

  getDay(date: Date) {
    return Number(date.getDate());
  }

  getHhMm(date: Date) {
    return date.getHours() + ':' + date.getMinutes();
  }
}
