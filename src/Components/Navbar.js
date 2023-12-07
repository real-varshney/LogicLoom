import React, {useState} from "react";
import { Button, Modal} from 'react-bootstrap';
import AiGen from "./AiGen";

const Navbar = () => {
  const handleShow = ()=>{
    setShow(true)
  }
  const handleClose = ()=>{
    setShow(false)
  }
  const [show, setShow] = useState(false)
  return (
    <div className="fixed w-full bg-white  z-10">
    <div className="flex justify-around pt-9 pb-5 ">
      <div>
        <a href="./">
          <h1 className="text-3xl font-bold text-blue-700">LogicLoom</h1>
        </a>
      </div>
      <div>
        <a href="#participate">
          <span className="text-xl font-normal text-gray-500 pl-3 pr-3">
            Debates
          </span>
        </a>
        <a href="#footer">
          <span className="text-xl font-normal text-gray-500 pl-3 pr-3">
            About
          </span>
        </a>
        <a href="#">
          <span className="text-xl font-normal text-gray-500 pl-3 pr-3">
            Blog
          </span>
        </a>
      </div>
      <div>
        <a href="#">
          <span className="text-xl font-semibold text-blue-500 pl-3 pr-3">
          <span onClick={handleShow}>
        Get to debate
      </span>

      <Modal show={show} onHide={handleClose} className="override_modal" style={{backgroundColor: 'transparent !important'}} ba >
        
        <Modal.Body><AiGen/></Modal.Body>
      </Modal>
          </span>
        </a>
        <a href="#">
    
        </a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
