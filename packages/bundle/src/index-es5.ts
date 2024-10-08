// Importing polyfills required for IE11/ES5.
import './polyfill';

import addVersion from './addVersion';
import defaultCreateDirectLine from './createDirectLine';
import defaultCreateDirectLineAppServiceExtension from './createDirectLineAppServiceExtension';
import { buildInfo as minimalBuildInfo, version } from './index-minimal';

const buildInfo = { ...minimalBuildInfo, variant: 'full-es5' };

export * from './index';

export const createDirectLine = options => {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );

  return defaultCreateDirectLine({ ...options, botAgent: `WebChat/${version} (ES5)` });
};

export const createDirectLineAppServiceExtension = options => {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );

  return defaultCreateDirectLineAppServiceExtension({ ...options, botAgent: `WebChat/${version} (ES5)` });
};

export { buildInfo };

window['WebChat'] = {
  ...window['WebChat'],
  buildInfo,
  createDirectLine,
  createDirectLineAppServiceExtension
};

addVersion('full-es5');
