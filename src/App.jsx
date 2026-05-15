// Entry point — router sẽ được mount ở đây sau
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './pages/404/404';
import HomeV2 from './pages/HomeV2';
import PublicLayout from './components/layout/PublicLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeV2 />} />
        </Route>
        {/* <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
        </Route> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
