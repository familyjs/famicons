import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'famicons',
  outputTargets: [
    {
      type: 'dist',
      empty: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        {
          src: './components/test/*.svg',
          dest: './assets/',
        },
      ],
      empty: false,
      serviceWorker: false,
    },
  ],
};
