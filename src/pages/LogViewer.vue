<script setup lang="ts">
import { ref, computed } from "vue";

interface LogEntry {
  id: number;
  timestamp: string;
  level: "info" | "warning" | "error";
  message: string;
  source: string;
  user?: string;
}

const logs = ref<LogEntry[]>([
  {
    id: 1,
    timestamp: "2024-04-12 10:00:00",
    level: "info",
    message: "系统启动成功",
    source: "System",
    user: "admin",
  },
  {
    id: 2,
    timestamp: "2024-04-12 10:01:00",
    level: "warning",
    message: "检测到异常登录尝试",
    source: "Security",
    user: "unknown",
  },
  {
    id: 3,
    timestamp: "2024-04-12 10:02:00",
    message: "用户登录成功",
    level: "info",
    source: "Auth",
    user: "user1",
  },
]);

const searchQuery = ref("");
const selectedLevel = ref<string>("all");
const selectedSource = ref<string>("all");

const levels = ["all", "info", "warning", "error"];
const sources = ["all", "System", "Security", "Auth"];

const filteredLogs = computed(() => {
  return logs.value.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      log.user?.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesLevel =
      selectedLevel.value === "all" || log.level === selectedLevel.value;
    const matchesSource =
      selectedSource.value === "all" || log.source === selectedSource.value;

    return matchesSearch && matchesLevel && matchesSource;
  });
});

const clearLogs = () => {
  if (confirm("确定要清空所有日志吗？")) {
    logs.value = [];
  }
};

const exportLogs = () => {
  // TODO: 实现导出日志的功能
  console.log("导出日志");
};
</script>

<template>
  <div class="log-viewer">
    <div class="header">
      <h1>系统日志</h1>
      <div class="actions">
        <button class="action-button" @click="clearLogs">清空日志</button>
        <button class="action-button" @click="exportLogs">导出日志</button>
      </div>
    </div>

    <div class="filters">
      <div class="search-box">
        <input v-model="searchQuery" type="text" placeholder="搜索日志..." />
      </div>

      <div class="filter-group">
        <select v-model="selectedLevel">
          <option v-for="level in levels" :key="level" :value="level">
            {{ level === "all" ? "所有级别" : level }}
          </option>
        </select>

        <select v-model="selectedSource">
          <option v-for="source in sources" :key="source" :value="source">
            {{ source === "all" ? "所有来源" : source }}
          </option>
        </select>
      </div>
    </div>

    <div class="log-container">
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th>级别</th>
            <th>来源</th>
            <th>用户</th>
            <th>消息</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="log in filteredLogs" :key="log.id" :class="log.level">
            <td>{{ log.timestamp }}</td>
            <td>
              <span :class="['level-badge', log.level]">
                {{ log.level }}
              </span>
            </td>
            <td>{{ log.source }}</td>
            <td>{{ log.user || "-" }}</td>
            <td>{{ log.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.log-viewer {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 95%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.action-button {
  padding: 0.5rem 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.search-box {
  flex: 1;
  min-width: 200px;
}

.search-box input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.filter-group {
  display: flex;
  gap: 1rem;
}

.filter-group select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
}

.log-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background: #f5f5f5;
  font-weight: 600;
}

.level-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  text-transform: capitalize;
}

.level-badge.info {
  background: #e3f2fd;
  color: #1976d2;
}

.level-badge.warning {
  background: #fff3e0;
  color: #f57c00;
}

.level-badge.error {
  background: #ffebee;
  color: #d32f2f;
}

tr.info {
  background: #f8f9fa;
}

tr.warning {
  background: #fff3e0;
}

tr.error {
  background: #ffebee;
}
</style>
