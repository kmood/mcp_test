import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  // web墨卡托投影
  xyz2lonlat_mkt(x: number, y: number, z: number): number[] {
    const n: number = Math.pow(2, z);
    const lon_deg: number = (x / n) * 360.0 - 180.0;
    const lat_rad: number = Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n)));
    const lat_deg: number = (180 * lat_rad) / Math.PI;
    return [lon_deg, lat_deg];
  }

  //wgs84投影
  xyz2lonlant_wgs84(x: number, y: number, z: number): number[] {
    const n = Math.pow(2, z);
    const lon_deg = (x / n) * 360.0 - 180.0;
    const lat_deg = 90 - (y / n) * 360.0;
    return [lon_deg, lat_deg];
  }

  // 获取简化程度值
  getSimplifyValue(zoom: number, srid: number) {
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
      if (zoom >= 10) return 0.000001;
      return SimplifyConfig4326[zoom];
    } else if (srid === 3857) {
      if (zoom >= 10) return 0.1;
      return SimplifyConfig3857[zoom];
    }
    return 0;
  }
}
