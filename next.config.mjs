export default {
  async redirects() {
    return [
      // 旧: /news/2025-06-01-poc-plan → 新: /news/poc-plan
      {
        source: '/news/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})-:slug',
        destination: '/news/:slug',
        permanent: true, // 308
      },
      // 必要なら末尾スラッシュ対策
      {
        source: '/news/:slug/',
        destination: '/news/:slug',
        permanent: true,
      },
    ];
  },
};
