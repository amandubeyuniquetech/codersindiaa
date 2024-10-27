import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { motion } from "framer-motion"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import LandingPage from './components/LandingPage.jsx';
import MockTests from './components/MockTests.jsx';
import TestLevel from './components/TestLevel.jsx';
import {PythonWelcome,Pythonintro, PythonTutorial} from './components/Python/PythonTutorial.jsx';
import QuizTopicList from './components/QuizTopicList/QuizTopicList.jsx';
import QuizesMode from './components/QuizesMode.jsx';
import { PythonL1MockTest1, PythonL1MockTest2, PythonL1MockTest3, PythonL1MockTest4,PythonL1MockTest5,PythonL1MockTest6, PythonL1MockTest7, PythonL1MockTest8,PythonL1MockTest9, PythonL1MockTest10, PythonL1MockTest11 } from './components/PythonMockTest/PythonMockTestL1.jsx';
import { PythonL2MockTest1, PythonL2MockTest2, PythonL2MockTest3, PythonL2MockTest4,PythonL2MockTest5,PythonL2MockTest6, PythonL2MockTest7, PythonL2MockTest8,PythonL2MockTest9, PythonL2MockTest10 } from './components/PythonMockTest/PythonMockTestL2.jsx';
import { PythonL3MockTest1, PythonL3MockTest2, PythonL3MockTest3, PythonL3MockTest4,PythonL3MockTest5,PythonL3MockTest6, PythonL3MockTest7, PythonL3MockTest8,PythonL3MockTest9, PythonL3MockTest10 } from './components/PythonMockTest/PythonMockTestL3.jsx';
import MockTestPage, { MockTestPagel1, MockTestPagel2, MockTestPagel3 } from './components/MockTests/MockTestPage.jsx';
import MockTestEntryPage from './components/MockTestEntryPage.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      // {
      //   path: '/quiz',
      //   element: <Quiz/>
      // },
      {
        path: '/mockTests',
        element: <MockTests/>
      },
      {
        path:'/mock-test-python',
        element:<MockTestEntryPage/>
      },
      {
        path:'/python-mock-test-page-l1',
        element:<MockTestPagel1/>,
        children:[
          {
            path: 'mocktest-1',
            element: <PythonL1MockTest1/>
          },
          {
            path: 'mocktest-2',
            element: <PythonL1MockTest2/>
          },
          {
            path: 'mocktest-3',
            element: <PythonL1MockTest3/>
          },
          {
            path: 'mocktest-4',
            element: <PythonL1MockTest4/>
          },
          {
            path: 'mocktest-5',
            element: <PythonL1MockTest5/>
          },
          {
            path: 'mocktest-6',
            element: <PythonL1MockTest6/>
          },
          {
            path: 'mocktest-7',
            element: <PythonL1MockTest7/>
          },
          {
            path: 'mocktest-8',
            element: <PythonL1MockTest8/>
          },
          {
            path: 'mocktest-9',
            element: <PythonL1MockTest9/>
          },
          {
            path: 'mocktest-10',
            element: <PythonL1MockTest10/>
          },
          {
            path: 'mocktest-11',
            element: <PythonL1MockTest11/>
          }
          
        ]
        
      },
      {
        path:'/python-mock-test-page-l2',
        element:<MockTestPagel2/>,
        children:[
          {
            path: 'mocktest-1',
            element: <PythonL2MockTest1/>
          },
          {
            path: 'mocktest-2',
            element: <PythonL2MockTest2/>
          },
          {
            path: 'mocktest-3',
            element: <PythonL2MockTest3/>
          },
          {
            path: 'mocktest-4',
            element: <PythonL2MockTest4/>
          },
          {
            path: 'mocktest-5',
            element: <PythonL2MockTest5/>
          },
          {
            path: 'mocktest-6',
            element: <PythonL2MockTest6/>
          },
          {
            path: 'mocktest-7',
            element: <PythonL2MockTest7/>
          },
          {
            path: 'mocktest-8',
            element: <PythonL2MockTest8/>
          },
          {
            path: 'mocktest-9',
            element: <PythonL2MockTest9/>
          },
          {
            path: 'mocktest-10',
            element: <PythonL2MockTest10/>
          }
          
        ]
        
      },
      {
        path:'/python-mock-test-page-l3',
        element:<MockTestPagel3/>,
        children:[
          {
            path: 'mocktest-1',
            element: <PythonL3MockTest1/>
          },
          {
            path: 'mocktest-2',
            element: <PythonL3MockTest2/>
          },
          {
            path: 'mocktest-3',
            element: <PythonL3MockTest3/>
          },
          {
            path: 'mocktest-4',
            element: <PythonL3MockTest4/>
          },
          {
            path: 'mocktest-5',
            element: <PythonL3MockTest5/>
          },
          {
            path: 'mocktest-6',
            element: <PythonL3MockTest6/>
          },
          {
            path: 'mocktest-7',
            element: <PythonL3MockTest7/>
          },
          {
            path: 'mocktest-8',
            element: <PythonL3MockTest8/>
          },
          {
            path: 'mocktest-9',
            element: <PythonL3MockTest9/>
          },
          {
            path: 'mocktest-10',
            element: <PythonL3MockTest10/>
          }
          
        ]
        
      },
      {
        path: '/python-quiz-mode',
        element: <QuizesMode/>
      },
      {
        path:'/quiz-topic-list',
        element:<QuizTopicList/>
      },
      {
        path: '/test-level',
        element: <TestLevel/>
      },
      {
        path:"/python-tutorial",
        element:<PythonTutorial/>,
      },
      {
        path:"/python-pip",
        element:<Pythonintro/>,
      },
      {
        path:"/python-welcome",
        element:<PythonWelcome/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
