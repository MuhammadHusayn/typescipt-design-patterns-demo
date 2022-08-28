export interface Analyzer<T> {
    run(analysis: T[]): string;
}
