import React from 'react';  // eslint-disable-line
import DetailList from '../DetailList/DetailList';  // eslint-disable-line
import SearchInput from '../SearchInput/SearchInput';  // eslint-disable-line
import './ForecastDetail.css'  // eslint-disable-line

function ForecastDetail() {
  return (
    <main className="ForecastDetail">
      <SearchInput />
      <DetailList />
    </main>
  );
}

export default ForecastDetail;
