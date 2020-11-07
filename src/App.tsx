import React from 'react';
import logo from './logo.svg';
import './App.css';

let a: number = 2;
let name: string = 'c3';
let isReact: boolean = true;

let names: Array<string> = ["q", "w", "e"]

let sex: 'male' | 'female';

type AddressType = {
  city?: string | null
  country: string | null
}

type UserType = {
  sayHello: (message: string) => void
  name: string
  age: number
  address: AddressType | null
}

let user: UserType = {
  sayHello(message: string) { alert("Hi!") },
  name: 'emil',
  age: 16,
  address: {
    city: "Ufa",
    country: "Russia"
  }
}

let initialState = {
  name: null as string | null,
  age: null as number | null,
  addresses: [] as Array<AddressType>
}

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
  name: 'emil',
  age: 16,
  addresses: [{
    city: "Ufa",
    country: "Russia"
  }]
}

let GET_TASKS = "APP/GetTASKS";
type GetTasksActionType = {
  id: number
  type: typeof GET_TASKS
}

let action: GetTasksActionType = {
  type: typeof GET_TASKS,
  id: 12
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
