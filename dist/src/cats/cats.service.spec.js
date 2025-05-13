"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cats_service_1 = require("./cats.service");
describe('CatsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [cats_service_1.CatsService],
        }).compile();
        service = module.get(cats_service_1.CatsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=cats.service.spec.js.map