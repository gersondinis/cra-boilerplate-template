
export const parseErrorMessage = (error: any, fallback = 'concept.api.error-msg.generic'): string => {
  if (error?.response?.data?.code) return `errors.${String(error.response.data.code)}`;
  if (error?.code) return `errors.${String(error.code)}`;
  if (error?.response?.statusText) return String(error.response.statusText);
  if (error?.errors) return String(error.errors);
  if (error?.message) return String(error.message);
  if (error && typeof error === 'string') return String(error);
  return fallback;
};
