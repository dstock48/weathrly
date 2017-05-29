import React from 'react';
import DetailList from '../DetailList/DetailList';
import SearchInput from '../SearchInput/SearchInput';
import './ForecastDetail.css'

function ForecastDetail() {
  return (
    <main className="ForecastDetail">
      <SearchInput />
      <DetailList />
    </main>
  )
}

export default ForecastDetail;
