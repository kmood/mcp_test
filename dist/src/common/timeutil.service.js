"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeutilService = void 0;
const common_1 = require("@nestjs/common");
let TimeutilService = class TimeutilService {
    formatDate(date) {
        const timestamp = new Date(date);
        const YY = timestamp.getFullYear() + '-';
        const MM = (timestamp.getMonth() + 1 < 10
            ? '0' + (timestamp.getMonth() + 1)
            : timestamp.getMonth() + 1) + '-';
        const DD = timestamp.getDate() < 10
            ? '0' + timestamp.getDate()
            : timestamp.getDate();
        const hh = (timestamp.getHours() < 10
            ? '0' + timestamp.getHours()
            : timestamp.getHours()) + ':';
        const mm = (timestamp.getMinutes() < 10
            ? '0' + timestamp.getMinutes()
            : timestamp.getMinutes()) + ':';
        const ss = timestamp.getSeconds() < 10
            ? '0' + timestamp.getSeconds()
            : timestamp.getSeconds();
        return YY + MM + DD + ' ' + hh + mm + ss;
    }
    getNow(now) {
        if (!now) {
            now = new Date();
        }
        const timeString = now.getFullYear() +
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
    getWeekday(date) {
        const days = [7, 1, 2, 3, 4, 5, 6];
        return days[date.getDay()];
    }
    getMonth(date) {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        return months[date.getMonth()];
    }
    getDay(date) {
        return Number(date.getDate());
    }
    getHhMm(date) {
        return date.getHours() + ':' + date.getMinutes();
    }
};
TimeutilService = __decorate([
    (0, common_1.Injectable)()
], TimeutilService);
exports.TimeutilService = TimeutilService;
//# sourceMappingURL=timeutil.service.js.map