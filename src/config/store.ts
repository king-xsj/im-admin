/**
 * Store 入口
 * @author KJ
 */
import { createStore } from 'vuex';
import { importAllStore } from '@/utils/store';

export default createStore({
  modules: importAllStore(),
  getters: {}
})
