  import { useState } from'react'
  import { IoSend } from "react-icons/io5";
  import ClipLoader from "react-spinners/ClipLoader";


  const override = {
    
    // color: '#FFFFFF',
    display: "block",
    margin: "0 auto",
    borderColor: "white",
    width: "20px",
    height: "20px",
  };

  const AiGen = () => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false)

      console.log('messages',messages)

    const getResponse = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/prompt/${text}`)
        const data = await response.json()
        console.log('data', data)
        setMessages([...messages,
            {
              author: data.messages[0].content,
              bot:  data.candidates[0].content
            }
        ])
        setLoading(false);
        setText('')
    }

    console.log(text)

    return (
      <div className="chat-bot">
        <div className="chat-header h-auto">
        <div className="info-container text-2xl p-10">
          Lets Debate
        </div>
      </div>
        <div className="feed">
            {messages?.map((message, _index) =>
                <div key={_index}>
                    <div className="question bubble">{message.author}</div>
                    <div className="response bubble">{message.bot}</div>
                </div>
            )}
        </div>
        <textarea value={text} onChange={e => setText(e.target.value)} onKeyDown={(e)=> {if(e.keyCode == 13) getResponse()}}/>
        
        <button onClick={getResponse} className='flex justify-center items-center btn_circle'>
          {
            loading ? ( <ClipLoader
            color='white'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />): (<IoSend />)
          }
          </button>
      </div>
    )
  }

  export default AiGen







// import React from 'react'

// const { TextServiceClient } =
//   require("@google-ai/generativelanguage").v1beta2;


// const AiGen = () => {
// const getdata = ()=>{

// }
//   return (
//     <div>
//       <button onClick={()=> getdata()}></button>
//     </div>
//   )
// }

// export default AiGen
