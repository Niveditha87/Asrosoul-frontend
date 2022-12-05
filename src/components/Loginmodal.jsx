import React from 'react'
import { useState } from 'react';
import LanguageModal from './LanguageModal';
import{MdToggleOn} from 'react-icons/md'
import{MdToggleOff} from 'react-icons/md'
import{BiEdit} from 'react-icons/bi'
import{AiOutlineDelete} from 'react-icons/ai'
import EditProfile from './EditProfile';



function Loginmodal() {
    const [showModal, setShowModal] = useState(false);
     const handleOnClose = () =>setShowModal(false)
 
  return (
  <>
  <div className=' block justify-center items-center w-full p-10 '>
    <div className='text-center  text-xl mb-8 font-semibold'> Profile setting</div>
    
    <div className='flex justify-center items-start w-auto gap-32  '>
        <div className='bg-yellow-400 border rounded-md w-[500px]  p-3 h-[150px]'>
            <div>Notifications</div>
            <div className='flex justify-between items-start gap-10 '>
               <div>Astromall chat</div>
                <div><MdToggleOff size={40} color={"white"}/></div>
            </div>
            <div  className='flex justify-between items-center'>
                <div>Live events</div>
                <div>
                    <MdToggleOn size={40} color={"white"}/>
                    </div>
            </div>
        </div>
        <div className='bg-yellow-400 border rounded-md  h-[150px] w-[500px]  p-4 '>
            <div>My languages</div>
            <div className='flex justify-around'>
            <div>   </div>
            <button  type="button"
        onClick={() => setShowModal(true)}>Edit your langauge</button>
            </div>
        </div>
    </div>
    {/* <div className='flex justify-center items-start w-auto gap-32 mt-12  ' >
    <div className='bg-yellow-400 border rounded-lg  h-[50px] w-[500px] p-4 flex justify-center items-center'>
            <div>
                <BiEdit size={20}/>
            </div>
            <div type="button"
        onClick={() => setShowModal(true)}>Edit profile</div>
        </div>
        <div className='bg-yellow-400 border rounded-lg  h-[50px] w-[500px] p-4 flex justify-center items-center '>
           <div>
            <AiOutlineDelete size={20} color={"red"}/>
           </div>
           <div className='text-red-500/100'>Delete my account</div>
        </div>
    </div> */}
    <LanguageModal onclose={handleOnClose} visible={showModal}/>

  </div>
  </>
  )
}

export default Loginmodal