"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlOutput = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlOutput {
    print(report) {
        const html = `
            <html>
                <head>
                    <title>Football Match Report</title>
                </head>
                <body>
                    <main id="report">${report}</main>
                </body>
            </html>
        `;
        if (!fs_1.default.existsSync("reports")) {
            fs_1.default.mkdirSync("reports");
            fs_1.default.writeFileSync("reports/report.html", html);
        }
        else {
            fs_1.default.writeFileSync("reports/report.html", html);
        }
    }
}
exports.HtmlOutput = HtmlOutput;
