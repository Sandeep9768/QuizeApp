import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import { YellowBox } from 'react-native';
import Result from "./screens/Result";
YellowBox.ignoreWarnings(['Remote debugger']);
const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  Result: {
    screen: Result,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerMode: 'none',
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color"),
        headerVisible: false,

      }
    })
  }

});

export default createAppContainer(MainStack);
