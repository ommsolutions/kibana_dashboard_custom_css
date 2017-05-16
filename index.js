import { resolve } from 'path';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    uiExports: {
      hacks: [
        'plugins/kibana_dashboard_custom_css/hack'
      ]
    }
  });
};
