const store = new Map<string, { count: number; time: number }>();

export class RateLimiter {
  static limit(key: string) {
    const now = Date.now();
    const data = store.get(key) || { count: 0, time: now };

    if (now - data.time > 15 * 60 * 1000) {
      data.count = 0;
      data.time = now;
    }

    data.count++;
    store.set(key, data);

    if (data.count > 100) {
      throw new Error("Rate limit exceeded");
    }
  }
}
