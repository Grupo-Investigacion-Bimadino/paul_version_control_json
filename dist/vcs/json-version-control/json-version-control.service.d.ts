export declare class JsonVersionControlService {
    private vc;
    constructor();
    saveNewVersion(data: any): void;
    getHistoryVersions(): any[];
    getPreviousVersion(): any;
    getNextVersion(): any;
    applyVersionToSource(version: any): void;
    getInitialVersion(): any;
    getLatestVersion(): any;
    applyInitialVersion(): void;
    applyLatestVersion(): void;
}
