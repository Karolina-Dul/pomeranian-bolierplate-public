import './styles.css';
import { useState } from 'react';

const nicks = [
  {
  nick: "Janek",
  id: 1,
},
{
  nick: "Zenek",
  id: 2,
},
  {
  nick: "Tomek",
  id: 3,
}]

export function SavedInput() {
  const [idCounter, setIdCounter] = useState(nicks.length)

  
  
  function addPerson(e) {
      const inputNickValue = e.target.value
      nicks[idCounter] = {nick: inputNickValue, id: (idCounter + 1)}
      console.log('1', nicks)
      
      function sendToLocalStorage() {
        const stringifyNickList = JSON.stringify(nicks)
        const idCounterList = []
        for (let i=0;nicks.length===i;i++) {
          idCounter[i]=i+1
        }
        
        localStorage.setItem("list-nicki", stringifyNickList)
        localStorage.setItem("list-nicki-index", idCounter)
      }

      sendToLocalStorage()
  }

  
  return (
    <div className='saved-input-container'>
      <form >
      <div className='left-part'>
        <div className='nick-input-row'>
          <p>NICK</p>
          <input type="text" className='input-nick' placeholder='Podaj swój nick' autoFocus onChange={addPerson}/>
        </div>
        <button type="submit">DODAJ</button>
      </div>
      </form>
      <div className='list'>
        {nicks.map((person)=>{
          return (
            <div className='row-on-list'>
              <div className='name-on-list'>{person.nick}</div>
              <button className='x-button'>X</button>
            </div>
          )
        })}
      </div>
    
    </div>
  );
}
