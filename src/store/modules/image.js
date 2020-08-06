import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    file: '',
    base64: '',
    imgUrl: '',
  },
  actions: {
    async dataTransfer({ commit }, { file }) {
      const render = new FileReader();
      return new Promise((resolve) => {
        render.addEventListener('load', (e) => {
          commit('DATATRANSFER', e.target.result);
          commit('DATASAVE', file);
          resolve();
        });
        render.readAsDataURL(file);
      });
    },
    async uploadImage({ commit, dispatch }, { file }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/upload`;
      const formData = new FormData();
      formData.append('image', file);
      const options = { root: true };
      commit('LOADING', true, options);
      try {
        const res = await axios.post(url, formData);
        if (!res.data.success) {
          commit('LOADING', false, options);
          dispatch('alert/updateMessage', { message: res.data.message, status: 'danger' }, options);
          return;
        }
        commit('UPLOADIMAGE', res.data.imgUrl);
      } catch (error) {
        commit('LOADING', false, options);
        dispatch('alert/updateMessage', { message: error.message, status: 'danger' }, options);
      }
    },
  },
  mutations: {
    DATATRANSFER(state, base64) {
      state.base64 = base64;
    },
    DATASAVE(state, file) {
      state.file = file;
    },
    UPLOADIMAGE(state, imgUrl) {
      state.imgUrl = imgUrl;
    },
  },
};
