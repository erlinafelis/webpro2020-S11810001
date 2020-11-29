// // import './App.css';
// // import Header from './Components/Header';
// // import Hello from './Components/Hello';
// // import Content from './Components/Content';

// // function App() {
// //   return (
// //     <>
// //       <Header />
// //       <Hello />
// //       <Content />
// //     </>
// //   );
// // };

// // export default App;

// import React from 'react';
// import './App.css';
// const sortByPower = (a, b) => {
//     return b.power - a.power;
// }
// const List = props => {
// return (
// <>
// <h1>React People!</h1>

// <ul className="list">
// {props.data.sort(sortByPower).map((person) => (
// <li key={person.name} className="list-item">
// <div className="list-item-image-container">
// <img src={person.thumbnail} />
// </div>
// <span className="list-item-name">
// {person.name} ( Power:{' '}
// <span className="list-item-power">{person.power}</span> )
// </span>
// </li>
// ))}
// </ul>
// </>
// );
// }
// const App = () => {
// const human = [
// {
// name: 'Kuririn',
// thumbnail:
//         'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
// power: 10
// },
// {
// name: 'Bulma',
// thumbnail: 
//         'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
// power: 3
// },
// {
// name: 'Chi-chi',
// thumbnail:
//         'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.ppg',

// power: 30
// }
// ];
// return (
// <div className="App">
// <List data={human} />
// </div>
// );
// }
// export default App;
//pertemuan 25


import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Home, Login, Register } from './pages'


const App = () =>{
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/Register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App