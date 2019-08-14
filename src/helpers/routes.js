import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';
import {
  Launch,
  Login,
  MainTabs,
  Main,
  JobSearch,
  Profile,
  Chat,
  Settings,
  Edit,
  ChatDetail,
} from '../views';

const ROUTES = {
	Launch: {
		component: () => Launch,
  },
	Login: {
		component: () => Login,
  },
  MainTabs: {
    component: () => MainTabs,
  },
	Main: {
		component: () => Main,
  },
  JobSearch: {
    component: () => JobSearch,
  },
  Chat: {
    component: () => Chat,
  },
  Profile: {
    component: () => Profile,
  },
  Settings: {
    component: () => Settings,
  },
  Edit: {
    component: () => Edit,
  },
  ChatDetail: {
    component: () => ChatDetail,
  },
	
};

Object.keys(ROUTES).forEach((routeName) => {
	Navigation.registerComponent(routeName, ROUTES[routeName].component);
  console.log(`Registered route: ${routeName}`);
});

export const setRootLaunch = () => {
  Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: { name: 'Launch', passProps: {} }
					},
				],
				options: {
					topBar: { visible: false },
				}
			},
		},
	});
}

export const setRootMainTabs = () => {
  Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: { name: 'MainTabs', passProps: {} }
					},
				],
				options: {
					topBar: { visible: false },
				}
			},
		},
	});
}