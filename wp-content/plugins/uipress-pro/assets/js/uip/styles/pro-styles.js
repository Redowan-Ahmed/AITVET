///IMPORT TRANSLATIONS
const { __, _x, _n, _nx } = wp.i18n;
export function fetchSettings(uipress) {
  return [
    //Primary
    {
      label: __('Border Width', 'uipress-pro'),
      name: '--uip-border-width',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Border Radius', 'uipress-pro'),
      name: '--uip-border-radius',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Border Colour', 'uipress-pro'),
      name: '--uip-border-color',
      type: 'color',
      value: '',
      darkValue: '',
    },
    //Margin
    {
      label: __('Margin xxs', 'uipress-pro'),
      name: '--uip-margin-xxs',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Margin xs', 'uipress-pro'),
      name: '--uip-margin-xs',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Margin s', 'uipress-pro'),
      name: '--uip-margin-s',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Margin m', 'uipress-pro'),
      name: '--uip-margin-m',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Margin l', 'uipress-pro'),
      name: '--uip-margin-l',
      type: 'units',
      value: '',
      darkValue: '',
    },
    //Padding
    {
      label: __('Padding xxs', 'uipress-pro'),
      name: '--uip-padding-xxs',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Padding xs', 'uipress-pro'),
      name: '--uip-padding-xs',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Padding s', 'uipress-pro'),
      name: '--uip-padding-s',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Padding m', 'uipress-pro'),
      name: '--uip-padding-m',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Padding l', 'uipress-pro'),
      name: '--uip-padding-l',
      type: 'units',
      value: '',
      darkValue: '',
    },
    {
      label: __('Font family', 'uipress-pro'),
      name: ' --uip-body-font-family',
      type: 'font',
      value: '',
      darkValue: '',
    },
  ];
}
