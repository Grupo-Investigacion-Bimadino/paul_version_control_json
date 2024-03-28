import { Injectable } from '@nestjs/common';
const { VersionControlSync } = require('json-version-control');

@Injectable()
export class JsonVersionControlService {
    private vc: any; // Instancia de VersionControlSync

    constructor() {
        // Inicializa la instancia de VersionControlSync con la configuración apropiada
        this.vc = new VersionControlSync({
            sourceFilePath: './data/source.json', // Ruta al archivo JSON original
            headFilePath: './data/head.json', // Ruta al archivo JSON para la versión actual
            historyDirectory: './data/history', // Directorio donde se guardarán las versiones anteriores
            diffFilePrefix: 'diff_', // Prefijo para los archivos de diferencias
        });
    }

    saveNewVersion(data: any): void {
        // Guarda una nueva versión
        this.vc.saveNewVersion(data);
    }

    getHistoryVersions(): any[] {
        // Obtiene la lista de versiones anteriores
        return this.vc.getHistoryVersions();
    }

    getPreviousVersion(): any {
        // Obtiene la versión anterior
        return this.vc.getPreviousVersion();
    }

    getNextVersion(): any {
        // Obtiene la siguiente versión
        return this.vc.getNextVersion();
    }

    applyVersionToSource(version: any): void {
        // Aplica una versión específica al archivo fuente
        this.vc.applyVersionToSource(version);
    }

    getInitialVersion(): any {
        // Obtiene el objeto fuente de la versión inicial
        return this.vc.getInitialVersion();
    }

    getLatestVersion(): any {
        // Obtiene el objeto fuente de la última versión
        return this.vc.getLatestVersion();
    }

    applyInitialVersion(): void {
        // Aplica la versión inicial al archivo fuente
        this.vc.applyInitialVersion();
    }

    applyLatestVersion(): void {
        // Aplica la última versión al archivo fuente
        this.vc.applyLatestVersion();
    }
}
