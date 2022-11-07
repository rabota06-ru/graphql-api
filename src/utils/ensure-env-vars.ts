class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string): string {
    const value = this.env[key];
    if (!value) throw new Error(`Отсутствует переменная окружения ${key}`);

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k));
  }

  public isProduction() {
    try {
      const mode = this.getValue("NODE_ENV");
      return mode === "production";
    } catch {
      return false;
    }
  }

  public getAccessTokenKey() {
    return this.getValue("ACCESS_TOKEN_KEY");
  }

  public getRefreshTokenKey() {
    return this.getValue("REFRESH_TOKEN_KEY");
  }
}

const configService = new ConfigService(process.env);

export default configService;
