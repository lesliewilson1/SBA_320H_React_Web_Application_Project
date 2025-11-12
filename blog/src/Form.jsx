import {useState} from 'react'
import Api from './Api'

export default function Form() {
  return (
    <>
      <form>
        <div>
          <label>
            Write your question here!
            <input type='text'></input>
          </label>

          <button>Submit Here Stinky</button>
        </div>
      </form>

    <div>
        <Api />
    </div>
    </>
  );
}
