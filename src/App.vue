<template>
  <a-config-provider :theme="themeConfig">
    <a-app>
      <AppNav />
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
      <AppFooter />
    </a-app>
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { theme } from 'ant-design-vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

const themeConfig = computed(() => ({
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#4d7dff',
    colorInfo: '#4d7dff',
    colorSuccess: '#34d399',
    colorWarning: '#fbbf24',
    colorError: '#f87171',
    colorBgBase: '#05060a',
    colorTextBase: '#f5f7fb',
    colorBgContainer: '#12151c',
    colorBgElevated: '#181c25',
    colorBorder: 'rgba(255,255,255,0.08)',
    colorBorderSecondary: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'PingFang SC', sans-serif",
    controlHeight: 40,
    wireframe: false,
  },
  components: {
    Layout: {
      headerBg: 'transparent',
      siderBg: 'transparent',
      bodyBg: 'transparent',
      footerBg: 'transparent',
    },
    Menu: {
      itemBg: 'transparent',
      subMenuItemBg: 'transparent',
      itemSelectedBg: 'rgba(77,125,255,0.16)',
      itemSelectedColor: '#f5f7fb',
      itemHoverBg: 'rgba(255,255,255,0.04)',
      itemColor: '#c8cdd9',
    },
    Button: {
      colorPrimaryHover: '#6a96ff',
      colorPrimaryActive: '#3a63e6',
      defaultBg: 'rgba(255,255,255,0.04)',
      defaultColor: '#f5f7fb',
      defaultBorderColor: 'rgba(255,255,255,0.12)',
    },
    Card: {
      colorBgContainer: 'var(--bg-elev-2)',
    },
  },
}))
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
