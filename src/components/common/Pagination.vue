<template>
  <div class="pagination">
    <button
      class="pagination__arrow left"
      :disabled="page === 1"
      @click.prevent="togglePage(page - 1)"
    >
      <i></i><i></i>
    </button>
    <div class="pagination__page">
      {{ pages === 0 ? 0 : page }}
      <span>/</span>
      {{ pages }}
    </div>
    <button
      class="pagination__arrow right"
      :disabled="page === pages || pages === 0"
      @click.prevent="togglePage(page + 1)"
    >
      <i></i><i></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    row: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    togglePage(page) {
      this.page = page;
      this.$emit('callTogglePage', page);
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.length / this.row);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/pagination.scss';
</style>
