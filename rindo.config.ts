import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'famicons',
  buildEs5: 'prod',
  sourceMap: false,
  outputTargets: [
    {
      type: 'dist',
      empty: false,
    },
    {
      type: 'dist-custom-elements',
      dir: './components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        {
          src: './svg/*.svg',
          dest: './build/svg/',
        }
      ],
      empty: false,
      serviceWorker: false,
    },
  ],
};
