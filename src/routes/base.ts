import HomeView from "@/pages/HelloWorld.vue";
import Test from "@/pages/Test.vue";
import Proxy from "@/pages/Proxy.vue";
import Login from "@/pages/Login.vue";
import Admin from "@/pages/Admin.vue";
import Forbidden from "@/pages/Forbidden.vue";
import UserManagement from "@/pages/UserManagement.vue";
import SystemSettings from "@/pages/SystemSettings.vue";
import LogViewer from "@/pages/LogViewer.vue";

export interface Meta {
  requiresAuth?: boolean;
  requireRole?: string[];
}

export default [
  {
    path: "/",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/test",
    component: Test,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/proxy",
    component: Proxy,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      requireRole: ["admin"],
    },
  },
  {
    path: '/admin/users',
    component: UserManagement,
    meta: {
      requiresAuth: true,
      requireRole: ["admin"],
    },
  },
  {
    path: '/admin/settings',
    component: SystemSettings,
    meta: {
      requiresAuth: true,
      requireRole: ["admin"],
    },
  },
  {
    path: '/admin/logs',
    component: LogViewer,
    meta: {
      requiresAuth: true,
      requireRole: ["admin"],
    },
  },
  {
    path: '/forbidden',
    component: Forbidden,
    meta: {
      requiresAuth: true,
    },
  }
];
