import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import 'antd/dist/antd.min.css';

// Import your page components
import Home from './schoolPages/index/page';
import Quiz from './schoolPages/quiz/page';
import Homework from './schoolPages/homework/page';
import Exam from './schoolPages/exam/page';
import LiveQuiz from './schoolPages/live-quiz/page';
import ThemePage from './schoolPages/themepage/page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="homework" element={<Homework />} />
          <Route path="exam" element={<Exam />} />
          <Route path="live-quiz" element={<LiveQuiz />} />
          <Route path="themepage" element={<ThemePage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
