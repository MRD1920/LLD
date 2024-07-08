// src/singleton/SingletonThreadSafe.ts
export class SingletonThreadSafe {
  private static uniqueInstance: SingletonThreadSafe;
  private static lock = new Object();

  private constructor() {
    // Private constructor ensures no external instantiation
  }

  public static getInstance(): SingletonThreadSafe {
    if (!SingletonThreadSafe.uniqueInstance) {
      synchronized(SingletonThreadSafe.lock, () => {
        if (!SingletonThreadSafe.uniqueInstance) {
          SingletonThreadSafe.uniqueInstance = new SingletonThreadSafe();
        }
      });
    }
    return SingletonThreadSafe.uniqueInstance;
  }

  public someBusinessLogic(): void {
    console.log("Executing business logic in a thread-safe manner");
  }
}

function synchronized(lock: Object, fn: () => void) {
  // Simplified lock mechanism for illustration purposes
  fn();
}
