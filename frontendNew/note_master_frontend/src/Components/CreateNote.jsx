import React from 'react';
import axios from 'axios';
import Note from './Note'; 

const CreateNote = ({ inputText, setInputText }) => {
    const charLimit = 200 - inputText.length;

    const saveHander = async () => {
        try {
            const response = await axios.post('http://172.19.30.10:3001/note/create', { note: inputText, email: "asdfs" });
            console.log(response.data);
            response.data.forEach((item) => {
                // console.log(`Item at index ${index}:`, item);
                return (
                    <Note key={item.id} id={item.id} text={item.text} />
                );
            });

            setInputText('');
        } catch (error) {
            console.error('Error saving note:', error);
        }
    };

  return (
    <div className='relative items-center justify-center w-full p-3 '>
     
      <div className='w-full h-full p-10 bg-transparent border border-gray-600 rounded-md bg-stone-300'>
        {/* <div><h2>fttttttttttttt</h2></div> */}
        <textarea 
        cols = {20}
        rows = {5}
        value={inputText}
        placeholder='Type new note......'
        onChange={(e) => setInputText(e.target.value)}
        
        maxLength={200}
        className='w-full h-full p-5 text-black placeholder-gray-800 bg-transparent border border-gray-600 rounded-md focus:outline-none bg-slate-50 '
        >

        </textarea>
        <div className='flex items-center justify-between '>
            <span>{charLimit}</span>
            <button onClick={saveHander} className='px-1 text-xl text-black border border-black rounded-md hover:text-gray-300 focus:outline-none bg-gradient-to-r from-sky-500 to-indigo-500'>Save</button>

        </div>
      
    </div>
    </div>
  )
}

export default CreateNote
