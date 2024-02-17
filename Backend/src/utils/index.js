
const useRoutes = (app,routes) => {
  routes.forEach(route => {
      app.use(route);
  });
};

module.exports = useRoutes;