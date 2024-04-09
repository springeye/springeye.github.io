<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
        <div class="container">
          <span class="message">
            <img src="../public/gonganbeian.png" style="width: 16px;display: inline-block;vertical-align: middle;"/>
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51015602000879" rel="noreferrer" target="_blank">川公网安备51015602000879</a>
            <a href="https://beian.miit.gov.cn/" style="margin-left: 10px;"  rel="noreferrer" target="_blank">蜀ICP备19040810号-3</a>
          </span>
          <p class="copyright">Copyright © 2024-present 陈小厨</p>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
