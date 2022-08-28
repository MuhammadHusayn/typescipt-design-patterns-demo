"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const Console_output_1 = require("./dataPrinters/Console.output");
const Html_output_1 = require("./dataPrinters/Html.output");
const WinsAnalysis_1 = require("./analizers/WinsAnalysis");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static ConsoleReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new Console_output_1.ConsoleOutput());
    }
    static HtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new Html_output_1.HtmlOutput());
    }
    buildAndPrintReport(matches) {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    }
}
exports.Summary = Summary;
