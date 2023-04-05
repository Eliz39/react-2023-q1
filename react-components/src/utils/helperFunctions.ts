export const getCurrentPage = (path: string) => {
  switch (path) {
    case '/':
      return 'Home';
    case '/about':
      return 'About us';
    case '/form':
      return 'Form';
  }
};
