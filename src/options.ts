import yargs from 'yargs';

import { version } from '../package.json';

export interface Options {
  url: string;
  redisPassword: string;
  prefix: string;
  metricPrefix: string;
  once: boolean;
  port: number;
  bindAddress: string;
  _: string[];
}

export function getOptionsFromArgs(...args: string[]): Options {
  return yargs
    .version(version)
    .alias('V', 'version')
    .options({
      url: {
        alias: 'u',
        describe: 'A redis connection url',
        default: 'redis://127.0.0.1:6379',
        demandOption: true,
      },
      redisPassword: {
        alias: 'o',
        describe: 'A redis password',
        default: ''
      },
      prefix: {
        alias: 'p',
        default: 'bull',
        demandOption: true,
      },
      metricPrefix: {
        alias: 'm',
        default: 'bull_queue_',
        defaultDescription: 'prefix for all exported metrics',
        demandOption: true,
      },
      once: {
        alias: 'n',
        default: false,
        description: 'Print stats and exit without starting a server',
      },
      port: {
        default: 9538,
      },
      bindAddress: {
        alias: 'b',
        description: 'Address to listen on',
        default: '0.0.0.0',
      },
    }).parse(args);
}
