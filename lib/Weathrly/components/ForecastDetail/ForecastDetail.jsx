import React from 'react';  // eslint-disable-line
import DetailList from '../DetailList/DetailList';  // eslint-disable-line
import SearchInput from '../SearchInput/SearchInput';  // eslint-disable-line
import './ForecastDetail.css'  // eslint-disable-line

function ForecastDetail({ data, tabName, handler, locationHandler, input }) {
  return (
    <main className="ForecastDetail">
      <SearchInput data={data} handler={locationHandler} input={input} />
      <DetailList data={data} tabName={tabName} handler={handler} />
    </main>
  );
}

export default ForecastDetail;
