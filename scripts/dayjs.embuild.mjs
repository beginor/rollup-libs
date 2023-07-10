import { buildOrWatch, createOptions } from './esbuild-helper.mjs';

const dev = createOptions(
  [
    './node_modules/dayjs/esm/index.js',
    './node_modules/dayjs/esm/locale/es-us.js',
    './node_modules/dayjs/esm/locale/zh-cn.js',
    './node_modules/dayjs/esm/plugin/advancedFormat',
    './node_modules/dayjs/esm/plugin/advancedFormat',
    './node_modules/dayjs/esm/plugin/arraySupport',
    './node_modules/dayjs/esm/plugin/badMutable',
    './node_modules/dayjs/esm/plugin/bigIntSupport',
    './node_modules/dayjs/esm/plugin/buddhistEra',
    './node_modules/dayjs/esm/plugin/calendar',
    './node_modules/dayjs/esm/plugin/customParseFormat',
    './node_modules/dayjs/esm/plugin/dayOfYear',
    './node_modules/dayjs/esm/plugin/devHelper',
    './node_modules/dayjs/esm/plugin/duration',
    './node_modules/dayjs/esm/plugin/isBetween',
    './node_modules/dayjs/esm/plugin/isLeapYear',
    './node_modules/dayjs/esm/plugin/isMoment',
    './node_modules/dayjs/esm/plugin/isSameOrAfter',
    './node_modules/dayjs/esm/plugin/isSameOrBefore',
    './node_modules/dayjs/esm/plugin/isToday',
    './node_modules/dayjs/esm/plugin/isTomorrow',
    './node_modules/dayjs/esm/plugin/isYesterday',
    './node_modules/dayjs/esm/plugin/isoWeek',
    './node_modules/dayjs/esm/plugin/isoWeeksInYear',
    './node_modules/dayjs/esm/plugin/localeData',
    './node_modules/dayjs/esm/plugin/localizedFormat',
    './node_modules/dayjs/esm/plugin/minMax',
    './node_modules/dayjs/esm/plugin/objectSupport',
    './node_modules/dayjs/esm/plugin/pluralGetSet',
    './node_modules/dayjs/esm/plugin/preParsePostFormat',
    './node_modules/dayjs/esm/plugin/quarterOfYear',
    './node_modules/dayjs/esm/plugin/relativeTime',
    './node_modules/dayjs/esm/plugin/timezone',
    './node_modules/dayjs/esm/plugin/toArray',
    './node_modules/dayjs/esm/plugin/toObject',
    './node_modules/dayjs/esm/plugin/updateLocale',
    './node_modules/dayjs/esm/plugin/utc',
    './node_modules/dayjs/esm/plugin/weekOfYear',
    './node_modules/dayjs/esm/plugin/weekYear',
    './node_modules/dayjs/esm/plugin/weekday',
  ],
  './dist/libs/dayjs/'
);
dev.chunkNames = 'chunks/[name]-[hash]';
dev.bundle = true;
dev.minify = true;
dev.legalComments = 'none';
dev.sourcemap = false;

export { dev };

if (import.meta.url.endsWith(process.argv[1])) {
  // build dev
  await buildOrWatch(dev);
}
