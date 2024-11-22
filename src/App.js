import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/:slug" element={<ProtectedRoute><Detail /></ProtectedRoute>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
