import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './security/authContext';
import ProtectedRoute from './routes/protectedRoute';
import Login from './pages/login';

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/:slug" element={<ProtectedRoute><Detail /></ProtectedRoute>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
