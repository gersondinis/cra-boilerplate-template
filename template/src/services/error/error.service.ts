
export const parseErrorMessage = (error: any, fallback = 'Unknown error'): string => {
  if (error?.response?.data?.error) return String(error.response.data.error).replaceAll('_', ' ');
  if (error?.response?.data?.code) return String(error.response.data.code);
  if (error?.code) return String(error.code);
  if (error?.response?.statusText) return String(error.response.statusText);
  if (error?.error) return String(error.error);
  if (error?.errors) return String(error.errors);
  if (error?.message) return String(error.message);
  if (error && typeof error === 'string') return String(error);
  return fallback;
};
