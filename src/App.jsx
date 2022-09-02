import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import {
  Footer,
  Navbar,
  Hero,
} from "./components";
import Home from "./Home";
import Team from "./Team";
import React from 'react'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden">
          <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/team" element={<Team />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
