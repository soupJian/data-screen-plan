import Vue from 'vue'
import {
  Menu,
  MenuItem,
  MenuItemGroup,
  Link,
  Button,
  Submenu,
  Message,
  Loading
} from 'element-ui';

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Link)
Vue.use(Button)
Vue.use(Submenu)

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading;
