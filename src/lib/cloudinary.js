export const getCloudinaryUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Just use local path for now to be fast
  return path.startsWith('/') ? path : `/${path}`;
};
