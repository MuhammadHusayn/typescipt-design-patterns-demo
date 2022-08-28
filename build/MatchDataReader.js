"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./dataReaders/CsvFileReader");
const dateConverter_1 = require("./utils/dateConverter");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static readFromCsv(fileName) {
        const reader = new CsvFileReader_1.CsvFileReader(fileName);
        return new MatchReader(reader);
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, dateConverter_1.dateConverter)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
