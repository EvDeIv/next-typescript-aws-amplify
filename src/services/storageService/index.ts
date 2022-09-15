export const storageService = {
  get: <DataType>(key: string): DataType | undefined => {
    if (typeof window !== "undefined") {
      const data = window?.localStorage.getItem(key);
      if (data === null) {
        return undefined;
      }
      return JSON.parse(data);
    }
    return undefined;
  },

  set: (key: string, value: unknown): boolean => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  },

  remove: (key: string) => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  },
};
