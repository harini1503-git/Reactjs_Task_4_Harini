import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { RequireAuth } from "./RequireAuth";
import { AuthProvider } from "./useAuth";
import Admin from "./Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin/dashboard"
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;