import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./styles/global.css";
import * as AntdIcons from "@ant-design/icons-vue";

const app = createApp(App);
app.use(router);
app.use(Antd);
for (const [key, component] of Object.entries(AntdIcons)) {
  app.component(key, component);
}
app.mount("#app");
