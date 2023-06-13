export const handleError = (label: string, customMessage?: string): void => {
  const message: string = customMessage || `Failed to ${label}`;

  throw new Error(message);
};
