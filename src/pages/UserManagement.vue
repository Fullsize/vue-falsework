<script setup lang="ts">
import { ref } from "vue";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastLogin: string;
}

const users = ref<User[]>([
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2024-04-12 10:00:00",
  },
  {
    id: 2,
    username: "user1",
    email: "user1@example.com",
    role: "user",
    status: "active",
    lastLogin: "2024-04-12 09:30:00",
  },
]);

const selectedUser = ref<User | null>(null);
const showEditModal = ref(false);

const editUser = (user: User) => {
  selectedUser.value = { ...user };
  showEditModal.value = true;
};

const deleteUser = (userId: number) => {
  if (confirm("确定要删除这个用户吗？")) {
    users.value = users.value.filter((user) => user.id !== userId);
  }
};
</script>

<template>
  <div class="user-management">
    <div class="header">
      <h1>用户管理</h1>
      <button class="add-button">添加用户</button>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>邮箱</th>
            <th>角色</th>
            <th>状态</th>
            <th>最后登录</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <span :class="['status-badge', user.status]">
                {{ user.status === "active" ? "活跃" : "未激活" }}
              </span>
            </td>
            <td>{{ user.lastLogin }}</td>
            <td>
              <button class="action-btn edit" @click="editUser(user)">
                编辑
              </button>
              <button class="action-btn delete" @click="deleteUser(user.id)">
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 编辑用户模态框 -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <h2>编辑用户</h2>
        <form v-if="selectedUser">
          <div class="form-group">
            <label>用户名</label>
            <input v-model="selectedUser.username" type="text" />
          </div>
          <div class="form-group">
            <label>邮箱</label>
            <input v-model="selectedUser.email" type="email" />
          </div>
          <div class="form-group">
            <label>角色</label>
            <select v-model="selectedUser.role">
              <option value="admin">管理员</option>
              <option value="user">普通用户</option>
            </select>
          </div>
          <div class="form-group">
            <label>状态</label>
            <select v-model="selectedUser.status">
              <option value="active">活跃</option>
              <option value="inactive">未激活</option>
            </select>
          </div>
          <div class="modal-actions">
            <button type="button" @click="showEditModal = false">取消</button>
            <button type="submit">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-management {
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

.add-button {
  padding: 0.5rem 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.table-container {
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

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.status-badge.active {
  background: #e8f5e9;
  color: #2e7d32;
}

.status-badge.inactive {
  background: #ffebee;
  color: #c62828;
}

.action-btn {
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.action-btn.edit {
  background: #2196f3;
  color: white;
}

.action-btn.delete {
  background: #f44336;
  color: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 95%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.modal-actions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-actions button[type="submit"] {
  background: #4caf50;
  color: white;
}
</style>
