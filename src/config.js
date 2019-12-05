const ENV = 'local';
export default {
  API: ENV === 'production' ? 'http://api.smartmobilityplanner.be' : 'http://localhost:8080',
  APIRoutes: {
    autocompleteBaseRoute: '/autocomplete',
    autocompleteSubRoutes: {
      station: '/station',
      address: '/address',
    },
    mapServerBase: '/tiles',
    routing: '/routing/route',
  },
};
