"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateConverter = void 0;
const dateConverter = (date) => {
    const [day, month, year] = date.split('/');
    return new Date(Number(year), Number(month) - 1, Number(day));
};
exports.dateConverter = dateConverter;
