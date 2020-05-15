export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    this.data = { ...this.data, ...update };
  }

  getAll(): T {
    return this.data;
  }
}

// strings can be a types in ts
// T[K] same as Obj[keyName]
// K extends keyof T: K = 'id' / 'name' / 'age'
