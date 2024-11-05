import { config } from "@vue/test-utils";

config.global.stubs = {
  NuxtLink: {
    template: "<a><slot /></a>",
  },
  Icon: {
    template: '<span class="icon"><slot /></span>',
  },
};

