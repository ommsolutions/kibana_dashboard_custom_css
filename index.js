import { resolve } from 'path';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    uiExports: {
      hacks: [
        'plugins/custom_css_plugin/hack'
      ]
    }
  });
};
