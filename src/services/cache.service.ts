/**
 * expiresIn - дата в миллисекундах, когда кэш удалится
 */
interface CacheValueOptions {
  expiresIn: number;
}

interface CachedValue<T = unknown> {
  id: number;
  expiresIn: number | null;
  value: T;
}

class CacheService {
  private lastGeneratedId = 0;
  private cachedValues: CachedValue[] = [];

  constructor() {
    setInterval(() => {
      const now = Date.now();
      this.cachedValues = this.cachedValues.filter(
        (value) => value.expiresIn === null || value.expiresIn > now
      );
    }, 1000);
  }

  private generateUniqueId() {
    this.lastGeneratedId++;
    return this.lastGeneratedId;
  }

  public cacheValue<T = unknown>(
    value: (id: number) => unknown,
    options?: CacheValueOptions
  ): CachedValue<T>;
  public cacheValue(value: unknown, options?: CacheValueOptions): CachedValue;
  public cacheValue(
    value: unknown | ((id: number) => unknown),
    options?: CacheValueOptions
  ): CachedValue {
    const generatedId = this.generateUniqueId();
    const cachedValue = {
      value: typeof value === "function" ? value(generatedId) : value,
      id: generatedId,
      expiresIn: options?.expiresIn ?? null,
    };
    this.cachedValues.push(cachedValue);

    return cachedValue;
  }

  getValueById<T = unknown>(id: number): T | undefined {
    return this.cachedValues.find((value) => value.id === id)?.value as T;
  }

  getValueWhere<T = unknown>(
    cb: (value: unknown) => boolean
  ): { value: T; id: number } | undefined {
    const value = this.cachedValues.find((value) => cb(value.value));

    if (value)
      return {
        id: value.id,
        value: value.value as T,
      };
  }

  clearValueById(id: number) {
    const valueIndex = this.cachedValues.findIndex((value) => value.id === id);
    if (valueIndex !== -1) this.cachedValues.splice(valueIndex, 1);
  }
}

const cacheService = new CacheService();

export default cacheService;
