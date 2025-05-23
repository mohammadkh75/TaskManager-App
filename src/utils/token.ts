export function createToken(): string {
    const random = Math.random().toString(36).substring(2);
    const timestamp = Date.now().toString(36);
    return `${random}${timestamp}`;
  }