import Home from "@containers/Home";
import About from "@containers/About";
// import surveyRoutes from "./survey";

// const dashboardImport = import(
//   "@dashboard/containers/RenderPages/LayoutTemplate"
// );

const RELATIVE_PATH = process.env.RELATIVE_PATH || "/";

export default [
  //#region Home page
  {
    path: RELATIVE_PATH + "home",
    public: true,
    title: "Home",
    children: <Home />,
  },
  {
    path: RELATIVE_PATH + "about",
    exact: true,
    public: true,
    title: "About",
    children: <About />,
  },
  //#endregion
  // //#region DASHBOARD
  // {
  //   path: RELATIVE_PATH + "dashboard/login",
  //   exact: true,
  //   public: true,
  //   title: "Loggin | Code Management System",
  //   component: Loadable({
  //     loader: () => import("@dashboard/containers/SignIn"),
  //     loading: () => <></>,
  //   }),
  // },
  // {
  //   path: RELATIVE_PATH + "dashboard/sites",
  //   public: false,
  //   title: "Sites | Code Management System",
  //   component: Loadable({
  //     loader: () => dashboardImport,
  //     loading: () => <></>,
  //   }),
  // },
  // {
  //   path: RELATIVE_PATH + "dashboard/types",
  //   public: false,
  //   title: "Types | Code Management System",
  //   component: Loadable({
  //     loader: () => dashboardImport,
  //     loading: () => <></>,
  //   }),
  // },
  // {
  //   path: RELATIVE_PATH + "dashboard/transport",
  //   public: false,
  //   title: "Transport Express | Code Management System",
  //   component: Loadable({
  //     loader: () => dashboardImport,
  //     loading: () => <></>,
  //   }),
  // },
  // {
  //   path: RELATIVE_PATH + "dashboard/survey",
  //   public: false,
  //   title: "Surveys | Code Management System",
  //   component: Loadable({
  //     loader: () => dashboardImport,
  //     loading: () => <></>,
  //   }),
  // },
  // {
  //   path: RELATIVE_PATH + "dashboard/survey/categories",
  //   public: false,
  //   title: "Surveys | Categories | Code Management System",
  //   component: Loadable({
  //     loader: () => dashboardImport,
  //     loading: () => <></>,
  //   }),
  // },
  // {
  //   path: RELATIVE_PATH + "dashboard/survey/questions",
  //   public: false,
  //   title: "Surveys | Questions | Code Management System",
  //   component: Loadable({
  //     loader: () => dashboardImport,
  //     loading: () => <></>,
  //   }),
  // },
  // //#endregion
  // ...surveyRoutes,
];

//#region process path
export const MODULES = {
  DASHBOARD: "dashboard",
  SURVEY: "survey",
};

export const CURRENT_MODULES = () => {
  const pathname = window.location.pathname;
  const routeName = pathname.split("/");

  return routeName[routeName[0] === "" ? 1 : 0].toLowerCase();
};
//#endregion
