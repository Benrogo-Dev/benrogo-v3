export const safeHostname = (value: string) => {
  try {
    return new URL(value).hostname;
  } catch {
    return value;
  }
};

