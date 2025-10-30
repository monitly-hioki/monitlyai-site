export default {
  async redirects() {
    return [
      {
        source: '/news/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})-:slug',
        destination: '/news/:slug',
        permanent: true,
      },
      {
        source: '/news/:slug/',
        destination: '/news/:slug',
        permanent: true,
      },
    ];
  },
};
