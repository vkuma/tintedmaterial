import React from 'react';
import { Route } from 'react-router-dom';

import DataTable from './routes/data-table/'
import Responsive from './routes/responsive/'
import Static from './routes/static/'


const Table = ({ match }) => (
  <div>
    <Route path={`${match.url}/data-table`} component={DataTable}/>
    <Route path={`${match.url}/responsive`} component={Responsive}/>
    <Route path={`${match.url}/static`} component={Static}/>
  </div>
)

export default Table;
