import './App.css';
// react components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// my components
import Plans from './components/Plans';
import DayPlanner from './pages/DayPlanner';
import AddPlans from './pages/AddPlans';
import ViewPlans from './pages/ViewPlans';
import ButtonAppBar from './navigation/ButtonAppBar';

const App = () => {
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<DayPlanner/>} />
        <Route path="/add-plan" element={<AddPlans/>} />
        <Route path="/view-plans" element={<ViewPlans/>} />
      </Routes>
    </Router>
  );
}

export default App;
