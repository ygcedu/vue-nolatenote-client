<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate"><i class="iconfont icon-plus"></i>新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks.length }})</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks" to="/note/1" class="notebook">
            <div>
              <span class="iconfont icon-notebook"/>{{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete(notebook)">删除</span>
              <span class="date">3天前</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/apis/auth';
import Notebooks from '@/apis/notebooks';

window.Notebooks = Notebooks;
export default {
  data() {
    return {
      notebooks: []
    };
  },
  created() {
    Auth.getInfo()
      .then(res => {
        if (!res.isLogin) {
          this.$router.push({path: '/login'});
        }
      });

    Notebooks.getAll()
      .then(res => {
        this.notebooks = res.data;
      });
  },
  methods: {
    onCreate() {
      console.log('create...');
    },
    onEdit(notebook) {
      console.log('edit...', notebook);
    },
    onDelete(notebook) {
      console.log('delete...', notebook);
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list.less);
</style>
