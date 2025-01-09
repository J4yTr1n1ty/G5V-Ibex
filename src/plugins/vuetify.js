import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#D18F45",
        secondary: colors.grey.darken2,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.lightBlue.lighten4,
        footer: colors.lightBlue,
      },
      dark: {
        primary: "#D18F45",
        background: colors.grey.darken3,
        footer: colors.teal,
      },
    },
  },
});
