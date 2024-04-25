import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home/Home';
import MyCourse from '../Screen/MyCourse/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard/LeaderBoard';
import Profile from '../Screen/Profile/Profile';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="my-course" component={MyCourse} />
            <Tab.Screen name="leaderboard" component={LeaderBoard} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    );
}

