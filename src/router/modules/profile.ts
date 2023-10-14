import { RouteRecordRaw } from "vue-router";

const profileRouters: Array<RouteRecordRaw> = [
  {
    path: "/selfInfoDetails",
    name: "SelfInfoDetails",
    component: () => import("@pages/profile/selfInfoDetails/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@pages/profile/about/index.vue"),
  },
  {
    path: "/accountSettings",
    name: "AccountSettings",
    component: () => import("@pages/profile/accountSettings/index.vue"),
  },
  {
    path: "/notificationSettings",
    name: "NotificationSettings",
    component: () => import("@pages/profile/notificationSettings/index.vue"),
  },
  {
    path: "/blackList",
    name: "BlackList",
    component: () => import("@pages/profile/blackList/index.vue"),
  },
  {
    path: "/changeNameOrRemark",
    name: "ChangeNameOrRemark",
    props: ({ query }) => ({
      friendInfo: query.friendInfo
        ? JSON.parse(query.friendInfo as string)
        : null,
    }),
    component: () => import("@pages/profile/changeNameOrRemark/index.vue"),
  },
];

export default profileRouters;
