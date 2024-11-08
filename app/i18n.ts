export default {
  supportedLngs: ['en', 'es', 'pt', 'pt-BR', 'ge', 'ru'],
  fallbackLng: 'en',
  // Disabling suspense is recommended
  react: { useSuspense: false },
  backend: {
    loadPath: '../public/locales/{{lng}}/{{ns}}.json',
  },
};
