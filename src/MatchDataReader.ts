import { CsvFileReader } from './dataReaders/CsvFileReader';
import { DataReader } from './types/interfaces/DataReader';
import { MatchResult } from './types/enums/MatchResult';
import { dateConverter } from './utils/dateConverter';
import { MatchData } from './types/tuples/MatchData';

export class MatchReader {
    static readFromCsv(fileName: string): MatchReader { 
        const reader = new CsvFileReader(fileName);
        return new MatchReader(reader);
    }

    matches: MatchData[] = [];

    constructor (public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => { 
                return [
                    dateConverter(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            }
        )
        
    }
}