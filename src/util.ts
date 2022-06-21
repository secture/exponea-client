export const getAuthToken = (apiKey: string, apiSecret: string): string => {
  const rawString = `${apiKey}:${apiSecret}`;
  const buffer = Buffer.from(rawString);
  const base64data = buffer.toString('base64');

  return `Basic ${base64data}`;
};
