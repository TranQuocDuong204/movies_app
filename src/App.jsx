import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <main className="pb-14 lg:pb-0">
        <Header />

        <div className="min-h-[90vh]">
          {" "}
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
