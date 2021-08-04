/*export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  authUrl: 'http://localhost:5000'
};*/

export const environment = {
  production: false,
  apiUrl: window["env"]["apiUrl"] || "default",
  authUrl: window["env"]["authUrl"] || "default",
  debug: window["env"]["debug"] || false
};