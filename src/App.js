import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Movies from './components/Movies';
import data from './components/movieData';
import { useEffect } from 'react';

function App() {
	
	useEffect(() => {
		localStorage.setItem('moviedata',JSON.stringify(data))
	}, [])
  return (
			<Router>
				<div className="App">
					<Link to='/'><h1>AsIndia</h1></Link>
					<Route path="/" exact component={Login} />
					<Route path="/movies/:id"  component={Movies} />
				</div>
			</Router>
		);
}

export default App;
