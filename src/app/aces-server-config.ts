
export abstract class AcesServerConfig {
  abstract getBaseUrl(): string;
}

export class ProdAcesServerConfig extends AcesServerConfig {
  getBaseUrl() {
    return 'https://aces-ark.io/aces-api';
  }
}

export class LocalAcesServerConfig extends AcesServerConfig {
  getBaseUrl() {
    return 'http://localhost:8080';
  }
}
