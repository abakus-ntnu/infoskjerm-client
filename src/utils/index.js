export function getBaseUrl() {
  switch (process.env.NODE_ENV) {
    case ('production'):
      return 'https://infoskjerm-api.koskom.no/';
    case ('development'):
      return 'http://localhost:3000/';
    default:
      return 'https://infoskjerm-api.koskom.no/';
  }
}
