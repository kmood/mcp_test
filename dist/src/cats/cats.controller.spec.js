"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cats_controller_1 = require("./cats.controller");
const cats_service_1 = require("./cats.service");
describe('CatsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [cats_controller_1.CatsController],
            providers: [cats_service_1.CatsService],
        }).compile();
        controller = module.get(cats_controller_1.CatsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=cats.controller.spec.js.map