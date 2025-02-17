import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import ArtistDetail from "./pages/detail/artist/ArtistDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/login/Login";
import Preferences from "./pages/preferences/Preferences";
import Account from "./pages/account/Account";
import Profile from "./pages/account/profile/Profile";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="w-full min-h-screen bg-zinc-950 text-neutral-400 flex flex-col overflow-hidden">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/preferences" element={<Preferences />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/artist-detail/:id" element={<ArtistDetail />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
