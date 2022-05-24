import { Routes, Route} from "react-router-dom";

import "./App.css";
import Home from "./Home";
import HomeListingPage from "./Pages/homeListingPage/HomeListingPage";
import LearnMorePage from "./Pages/learnMorePage/LearnMorePage";
import MapPage from "./Pages/mapPage/MapPage";
// import { useEffect, useState } from "react";


function App() {

//  const [first, setfirst] = useState(false)

//   document.addEventListener('scroll', function(e) {
//     let lastKnownScrollPosition = window.scrollY;
//     let position=parseInt(lastKnownScrollPosition);

//     if(position<2){
//       setfirst(true)
//       // console.log(first);
//           }else{
//             setfirst(false)
//           }

//           const scrollToTop = () =>{
//             window.scrollTo({
//               top: 0, 
//             });
//           };
 
//   });

//   useEffect(() => {
//      console.log("hello");
//      window.scrollTo({
//       top: 0, 
//     });
// }, [first])
 

  return (
   <div className="app">
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="flexibleBtn" element={<HomeListingPage />} />
        <Route path="learnmoreBtn" element={<LearnMorePage/>} />
        <Route path="map" element={<MapPage/>} />
      </Routes>

   </div>
  );
}

export default App;
