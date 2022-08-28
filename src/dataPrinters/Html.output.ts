import { OutputTarget } from "../types/interfaces/OutputTarget";
import fs from "fs";

export class HtmlOutput implements OutputTarget {
    print(report: string): void {
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

        if (!fs.existsSync("reports")) { 
            fs.mkdirSync("reports");
            fs.writeFileSync("reports/report.html", html);
        } else {
            fs.writeFileSync("reports/report.html", html);
        }
    }
}