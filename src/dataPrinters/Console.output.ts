import { OutputTarget } from "../types/interfaces/OutputTarget";

export class ConsoleOutput implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}