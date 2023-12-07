import { useRef, useState, useEffect } from "react";
import btnTop from '../../components/btn-top.png'
import btnBottom from '../../components/btn-bottom.png'
import "./index.css";
const Calendar = ({newDeadlineChange,index,onCloseModalNewDeadline}) => {
  const year = new Date().getFullYear();

  const arrayMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [prevMonth, setPrevMonth] = useState(currentMonth === 0 ? 11 : currentMonth - 1);
  const [nextMonth, setNextMonth] = useState(currentMonth === 11 ? 0 : currentMonth + 1);

  const addMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setPrevMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setNextMonth((nextMonth) => (nextMonth === 11 ? 0 : nextMonth + 1));

    setNumber(1);
  };

  const removeMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setPrevMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setNextMonth((nextMonth) => (nextMonth === 0 ? 11 : nextMonth - 1));
    setNumber(1);
  }

  const [number,setNumber] = useState(1);

  const addNumber = () => {
    setNumber((number) => (number === lastDayOfMonth ? 1 : number + 1));
  }
  const removeNumber = () => {
    setNumber((number) => (number === 1 ? lastDayOfMonth : number - 1));
  }
  
  const xMonth = new Date(year, currentMonth + 1, 1);
  const lastDayOfMonth = new Date(xMonth - 1).getDate();

  const newDeadline = new Date( year,currentMonth,number, );

  const weekday = newDeadline.toLocaleString('default', { weekday: 'long' });

  // const newDeadline = new Date().getMonth(currentMonth).getDay(number) ;
  return(
      <div className="calendar">
          <div className="container">
          <div className="months">
            <button className="btn-top" onClick={addMonth}>
              <img className="img-top" src={btnTop} alt="вцф"/>
            </button>
              <div className="months_no-active">{arrayMonths[nextMonth]}</div>
              <div  className="months_active">{arrayMonths[currentMonth]}</div>
              <div className="months_no-active">{arrayMonths[prevMonth]}</div>
            <button className="btn-bottom" onClick={removeMonth}>
              <img className="img-bottom" src={btnBottom} alt="вцф"/>
            </button>
          </div>
          <div className="numbers">
            <button className="btn-top-numbers" onClick={addNumber}>
            <img className="img-top" src={btnTop} alt="вцф"/>
            </button>
              <div className="numbers_active">
                <span>{weekday} </span>
                <span className="date-active">{number}</span>
              </div>
            <button className="btn-bottom-numbers" onClick={removeNumber}>
              <img className="img-bottom" src={btnBottom} alt="вцф"/>
            </button>
          </div>
        </div>
        <div className="container-btn">
          <button onClick={() => onCloseModalNewDeadline(newDeadline,index)} className="btn-close">oк</button>
        </div>
      </div>
      
  )
};

 

export default Calendar;
