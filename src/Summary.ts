import { OutputTarget } from "./types/interfaces/OutputTarget";
import { ConsoleOutput } from "./dataPrinters/Console.output";
import { HtmlOutput } from "./dataPrinters/Html.output";
import { WinsAnalysis } from "./analizers/WinsAnalysis";
import { Analyzer } from "./types/interfaces/Analyzer";
import { MatchData } from "./types/tuples/MatchData";

export class Summary { 
    static ConsoleReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new ConsoleOutput());
    }

    static HtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlOutput());
    }

    constructor(
        public analyzer: Analyzer<MatchData>,
        public outputTarget: OutputTarget
    ) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    }
}