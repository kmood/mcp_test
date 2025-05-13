"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilService = void 0;
const common_1 = require("@nestjs/common");
let UtilService = class UtilService {
    xyz2lonlat_mkt(x, y, z) {
        const n = Math.pow(2, z);
        const lon_deg = (x / n) * 360.0 - 180.0;
        const lat_rad = Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n)));
        const lat_deg = (180 * lat_rad) / Math.PI;
        return [lon_deg, lat_deg];
    }
    xyz2lonlant_wgs84(x, y, z) {
        const n = Math.pow(2, z);
        const lon_deg = (x / n) * 360.0 - 180.0;
        const lat_deg = 90 - (y / n) * 360.0;
        return [lon_deg, lat_deg];
    }
    getSimplifyValue(zoom, srid) {
        const SimplifyConfig4326 = {
            1: 0.2,
            2: 0.1,
            3: 0.06,
            4: 0.03,
            5: 0.01,
            6: 0.005,
            7: 0.003,
            8: 0.002,
            9: 0.001,
        };
        const SimplifyConfig3857 = {
            1: 20000,
            2: 10000,
            3: 6000,
            4: 3000,
            5: 2000,
            6: 500,
            7: 300,
            8: 200,
            9: 100,
        };
        if (srid === 4326 || srid === 4490) {
            if (zoom >= 10)
                return 0.000001;
            return SimplifyConfig4326[zoom];
        }
        else if (srid === 3857) {
            if (zoom >= 10)
                return 0.1;
            return SimplifyConfig3857[zoom];
        }
        return 0;
    }
};
UtilService = __decorate([
    (0, common_1.Injectable)()
], UtilService);
exports.UtilService = UtilService;
//# sourceMappingURL=util.service.js.map