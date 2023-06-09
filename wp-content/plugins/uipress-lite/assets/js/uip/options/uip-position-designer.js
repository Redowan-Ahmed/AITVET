const { __, _x, _n, _nx } = wp.i18n;
export function moduleData() {
  return {
    props: {
      returnData: Function,
      value: Object,
    },
    data: function () {
      return {
        option: this.value,
        loading: true,
        positionOptions: [
          {
            label: __('Relative', 'uipress-lite'),
            value: 'relative',
          },
          {
            label: __('Absolute', 'uipress-lite'),
            value: 'absolute',
          },
          {
            label: __('Fixed', 'uipress-lite'),
            value: 'fixed',
          },
          {
            label: __('Sticky', 'uipress-lite'),
            value: 'sticky',
          },
        ],
        strings: {
          left: __('Left', 'uipress-lite'),
          top: __('Top', 'uipress-lite'),
          right: __('Right', 'uipress-lite'),
          bottom: __('Bottom', 'uipress-lite'),
          inset: __('Inset', 'uipress-lite'),
        },
      };
    },
    inject: ['uipress'],
    watch: {
      option: {
        handler(newValue, oldValue) {
          this.returnData(this.option);
        },
        deep: true,
      },
    },
    mounted: function () {
      this.processInput();
    },
    methods: {
      processInput() {
        if (!this.uipress.isObject(this.value)) {
          this.option = {};
          this.option.position = '';
          this.option.offset = {};
          this.option.offset.units = 'px';
          this.option.offset.left = '';
          this.option.offset.top = '';
          this.option.offset.right = '';
          this.option.offset.bottom = '';
        }

        this.loading = false;
      },
    },
    template:
      '<div class="uip-flex uip-flex-column uip-row-gap-xxs" v-if="!loading">\
        <div class="uip-margin-bottom-xxs">\
          <default-select :value="option.position" :returnData="function(e){option.position = e}" :args="{options: positionOptions}"></default-select>\
        </div>\
        <div class="uip-text-s uip-text-muted">{{strings.inset}}</div>\
        <div class="uip-flex uip-flex-row uip-gap-xxxs">\
      \
              <uip-tooltip :message="strings.left" :delay="0" containerClass="uip-flex">\
                <div class="uip-flex uip-flex-row uip-padding-xxs uip-background-muted uip-border-round uip-text-center">\
                    <input class="uip-blank-input uip-text-center uip-w-28 uip-text-s" v-model="option.offset.left" >\
                </div>\
              </uip-tooltip>\
            \
              <uip-tooltip :message="strings.right" :delay="0" containerClass="uip-flex">\
                <div class="uip-flex uip-flex-row uip-padding-xxs uip-background-muted uip-border-round uip-text-center">\
                    <input class="uip-blank-input uip-text-center uip-w-28 uip-text-s" v-model="option.offset.right" >\
                </div>\
              </uip-tooltip>\
            \
              <uip-tooltip :message="strings.top" :delay="0" containerClass="uip-flex">\
                <div class="uip-flex uip-flex-row uip-padding-xxs uip-background-muted uip-border-round uip-text-center">\
                    <input class="uip-blank-input uip-text-center uip-w-28 uip-text-s" v-model="option.offset.top" >\
                </div>\
              </uip-tooltip>\
              \
              <uip-tooltip :message="strings.bottom" :delay="0" containerClass="uip-flex">\
                <div class="uip-flex uip-flex-row uip-padding-xxs uip-background-muted uip-border-round uip-text-center" >\
                    <input class="uip-blank-input uip-text-center uip-w-28 uip-text-s" v-model="option.offset.bottom" >\
                </div>\
              </uip-tooltip>\
          \
          \
              <div class="uip-background-muted uip-border-round">\
               <units-select :value="option.offset.units" :returnData="function(e){option.offset.units = e}"></units-select>\
              </div>\
        \
        </div>\
    </div>',
  };
}
