import { StrictStyleOptions, StyleOptions } from 'botframework-webchat-api';
import * as decorator from 'botframework-webchat-api/decorator';
import { WebChatDecorator } from 'botframework-webchat-component/decorator';
import { Constants, createStore, createStoreWithDevTools, createStoreWithOptions } from 'botframework-webchat-core';
import * as internal from 'botframework-webchat-component/internal';

import ReactWebChat, {
  Components,
  concatMiddleware,
  createStyleSet,
  hooks,
  testIds,
  withEmoji
} from 'botframework-webchat-component';

import addVersion from './addVersion';
import createBrowserWebSpeechPonyfillFactory from './createBrowserWebSpeechPonyfillFactory';
import defaultCreateDirectLine from './createDirectLine';
import defaultCreateDirectLineAppServiceExtension from './createDirectLineAppServiceExtension';
import coreRenderWebChat from './renderWebChat';

const renderWebChat = coreRenderWebChat.bind(null, ReactWebChat);

const buildTool = process.env.build_tool;
const moduleFormat = process.env.module_format;
const version = process.env.npm_package_version;

const buildInfo = { buildTool, moduleFormat, variant: 'minimal', version };

export const createDirectLine = options => {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );

  return defaultCreateDirectLine({ ...options, botAgent: `WebChat/${version} (Minimal)` });
};

export const createDirectLineAppServiceExtension = options => {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );

  return defaultCreateDirectLineAppServiceExtension({ ...options, botAgent: `WebChat/${version} (Minimal)` });
};

export default ReactWebChat;

export {
  buildInfo,
  Components,
  concatMiddleware,
  Constants,
  createBrowserWebSpeechPonyfillFactory,
  createStore,
  createStoreWithDevTools,
  createStoreWithOptions,
  createStyleSet,
  internal,
  hooks,
  renderWebChat,
  version,
  withEmoji
};

export type { StrictStyleOptions, StyleOptions };

// Until we have a development-specific bundle, we are not shipping createStoreWithDevTools in bundle.
window['WebChat'] = {
  ...window['WebChat'],
  concatMiddleware,
  Constants,
  createBrowserWebSpeechPonyfillFactory,
  createDirectLine,
  createDirectLineAppServiceExtension,
  createStore,
  createStoreWithOptions,
  createStyleSet,
  decorator: {
    ...decorator,
    WebChatDecorator
  },
  internal,
  hooks,
  ReactWebChat,
  renderWebChat,
  testIds: {
    ...(window['WebChat']?.testIds || {}),
    ...testIds
  },
  withEmoji
};

addVersion('minimal');
