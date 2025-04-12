<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

interface SystemSettings {
  siteName: string;
  siteDescription: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
  emailNotifications: boolean;
  maxUploadSize: number;
  timezone: string;
}

const router = useRouter();
const settings = ref<SystemSettings>({
  siteName: "我的网站",
  siteDescription: "这是一个示例网站",
  maintenanceMode: false,
  allowRegistration: true,
  emailNotifications: true,
  maxUploadSize: 10,
  timezone: "Asia/Shanghai",
});

const timezones = [
  "Asia/Shanghai",
  "Asia/Tokyo",
  "America/New_York",
  "Europe/London",
];

const stats = ref({
  users: 0,
  activeSessions: 0,
  systemStatus: "Normal",
});

const navigateTo = (path: string) => {
  router.push(path);
};

const saveSettings = () => {
  // TODO: 实现保存设置到后端的逻辑
  console.log("保存设置：", settings.value);
};
</script>

<template>
  <div class="admin-container">
    <h1>管理员控制面板</h1>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>用户总数</h3>
        <p>{{ stats.users }}</p>
      </div>
      <div class="stat-card">
        <h3>活跃会话</h3>
        <p>{{ stats.activeSessions }}</p>
      </div>
      <div class="stat-card">
        <h3>系统状态</h3>
        <p>{{ stats.systemStatus }}</p>
      </div>
    </div>

    <div class="admin-actions">
      <div class="action-card" @click="navigateTo('/admin/users')">
        <h3>用户管理</h3>
        <p>管理用户账户和权限</p>
      </div>
      <div class="action-card" @click="navigateTo('/admin/settings')">
        <h3>系统设置</h3>
        <p>配置系统参数和选项</p>
      </div>
      <div class="action-card" @click="navigateTo('/admin/logs')">
        <h3>日志查看</h3>
        <p>查看系统日志和事件</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 95%;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-card {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.stat-card h3 {
  margin: 0 0 1rem 0;
  color: #666;
}

.stat-card p {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.admin-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.action-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.action-card h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.action-card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
