import { runApp, IAppConfig } from 'ice';
import FrameworkLayout from './Layouts/FrameworkLayout';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  icestark: {
    Layout: FrameworkLayout,
    getApps: () => [
      {
        title: '数据总览',
        sandbox: true,
        loadScriptMode: 'import',
        activePath: '/data/overview',
        entry: `http://localhost:${3061}`,
      },
    ],
    // appRouter: {
    //   LoadingComponent: PageLoading,
    // },
  },
};

runApp(appConfig);
