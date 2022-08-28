import { MatchResult } from '../types/enums/MatchResult';
import { Analyzer } from '../types/interfaces/Analyzer';
import { MatchData } from '../types/tuples/MatchData';

export class WinsAnalysis implements Analyzer<MatchData> {

    constructor(public team: string) {}
    
    run(matches: MatchData[]): string {
        let wins: number = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }

        return `Team ${this.team} won ${wins} games`;
    }
}