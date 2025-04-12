<script setup lang="ts">
import { ref } from "vue";

interface SystemSettings {
  siteName: string;
  siteDescription: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
  emailNotifications: boolean;
  maxUploadSize: number;
  timezone: string;
}

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

const saveSettings = () => {
  // TODO: 实现保存设置到后端的逻辑
  console.log("保存设置:", settings.value);
};
</script>

<template>
  <div class="system-settings">
    <h1>系统设置</h1>

    <div class="settings-form">
      <div class="form-group">
        <label>网站名称</label>
        <input v-model="settings.siteName" type="text" />
      </div>

      <div class="form-group">
        <label>网站描述</label>
        <textarea v-model="settings.siteDescription"></textarea>
      </div>

      <div class="form-group">
        <label>时区</label>
        <select v-model="settings.timezone">
          <option v-for="tz in timezones" :key="tz" :value="tz">
            {{ tz }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>最大上传文件大小 (MB)</label>
        <input
          v-model="settings.maxUploadSize"
          type="number"
          min="1"
          max="100"
        />
      </div>

      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input v-model="settings.maintenanceMode" type="checkbox" />
          维护模式
        </label>
        <p class="description">启用后网站将进入维护状态，只有管理员可以访问</p>
      </div>

      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input v-model="settings.allowRegistration" type="checkbox" />
          允许新用户注册
        </label>
      </div>

      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input v-model="settings.emailNotifications" type="checkbox" />
          启用邮件通知
        </label>
      </div>

      <div class="form-actions">
        <button @click="saveSettings" class="save-button">保存设置</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system-settings {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 95%;
}

.settings-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.description {
  margin: 0.25rem 0 0 1.5rem;
  font-size: 0.875rem;
  color: #666;
}

.form-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}

.save-button {
  padding: 0.75rem 1.5rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.save-button:hover {
  background: #45a049;
}
</style>
