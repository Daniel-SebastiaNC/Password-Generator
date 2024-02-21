import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "./pages/home"
import { Pass } from "./pages/savePass"

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        if(focused){
                            return <Ionicons color={color} size={size} name="home"/>
                        }
                        return <Ionicons color={color} size={size} name="home-outline"/>
                    }
                }}
            />

            <Tab.Screen
                name="Pass"
                component={Pass}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        if(focused){
                            return <Ionicons color={color} size={size} name="lock-closed"/>
                        }
                        return <Ionicons color={color} size={size} name="lock-closed-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}