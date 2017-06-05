import React from 'react';
import DetailList from '../DetailList/DetailList';
import SearchInput from '../SearchInput/SearchInput';
import './ForecastDetail.css';

function ForecastDetail({ data, tabName, handler, locationHandler, input, getDay, selectedDay, selectedMonth }) {
  return (
    <main className="ForecastDetail">
      <SearchInput
        data={data}
        handler={locationHandler}
        input={input}
      />
      <DetailList
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        getDay={getDay}
        data={data}
        tabName={tabName}
        handler={handler}
      />
    </main>
  );
}

export default ForecastDetail;
