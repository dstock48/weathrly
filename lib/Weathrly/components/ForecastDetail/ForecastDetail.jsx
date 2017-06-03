import React from 'react';  // eslint-disable-line
import DetailList from '../DetailList/DetailList';  // eslint-disable-line
import SearchInput from '../SearchInput/SearchInput';  // eslint-disable-line
import './ForecastDetail.css'  // eslint-disable-line

function ForecastDetail({ data, tabName, handler, locationHandler, input, getDay, selectedDay, selectedMonth }) {
  return (
    <main className="ForecastDetail">
      <SearchInput data={data}
        handler={locationHandler}
        input={input} />
      <DetailList selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        getDay={getDay}
        data={data}
        tabName={tabName}
        handler={handler} />
    </main>
  );
}

export default ForecastDetail;
