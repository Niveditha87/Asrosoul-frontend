import Forms from "./components/Forms";
import Pooja from "./components/Pooja";
import TodayHoroscope from "./components/TodayHoroscope";
import Loginpage from "./components/Loginpage";
// import Modal from "./components/Profile";
import Loginmodal from "./components/Loginmodal";
import EditeDelete from "./components/EditeDelete";

function App() {
  return (
    <>
     <div className="container w-100 ">
       {/* <Forms/> */}
         {/* <Pooja/> */}
    {/* // <TodayHoroscope/> */}
        {/* <Loginpage/> */}
        {/* <Modal/> */}
        <Loginmodal/>
        <EditeDelete/>
        
       </div>
    </>
  );
}

export default App;
