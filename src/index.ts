import { MatchReader } from './MatchDataReader';
import { Summary } from './Summary';

const fileReader = MatchReader.readFromCsv('football.csv');
const consoleSummary = Summary.ConsoleReport('Man United');
const htmlSummary = Summary.HtmlReport('Man United');

fileReader.load();
consoleSummary.buildAndPrintReport(fileReader.matches)
htmlSummary.buildAndPrintReport(fileReader.matches)


