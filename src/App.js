import React from 'react';
import { Link } from 'react-router-dom';

import './bootstrap/bootstrap-reboot.min.css';
import './bootstrap/bootstrap-grid.min.css';
import './bootstrap/bootstrap-utilities.min.css';
import './scss/App.scss';

const App = () => (
	<>
		<style>
			{'a:focus { outline: 2px solid #0d6efd; outline-offset: 2px; } '}
		</style>
		<div className="container" style={{ padding: '30px 0' }}>
			<ul>
				<li><Link to="/components-demo">Demo of good/bad components</Link></li>
				<li><Link to="/demo-page">Sample page</Link></li>
			</ul>
		</div>
	</>
);

export default App;
