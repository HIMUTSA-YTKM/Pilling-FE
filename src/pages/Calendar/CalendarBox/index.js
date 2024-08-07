import React, { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import {
  CalendarItem,
  CalendarBoxWrapper,
  CalendarBoxContainer,
  ChangeButton,
  Day,
  DayContainer,
  WeekContainer,
  MonthDisplay,
  YearDisplay,
  MonthBox,
  DateBox,
  CalendarBoxLayout,
  Circle,
} from "./styles";
import arrowLeft from "./../../../assets/Calendar/arrow-left-white.svg";

const CalendarBox = ({ clickedDate, setClickedDate, items = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatCurrentMonth = format(currentDate, "M");
  const formatCurrentYear = format(currentDate, "yyyy");

  const startCurrentMonth = startOfMonth(currentDate);
  const endCurrentMonth = endOfMonth(currentDate);
  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 });
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });

  const formatDays = days.map((day) => {
    const date = format(day, "yyyy-MM-dd");
    const itemsForDay = items.filter((item) => item.date === date);
    const allItemsChecked =
      itemsForDay.length > 0 && itemsForDay.every((item) => item.completed);

    return {
      date,
      year: format(day, "yyyy"),
      month: format(day, "M"),
      day: format(day, "dd"),
      isToday: isToday(day),
      hasItems: itemsForDay.length > 0,
      allItemsChecked,
      isCurrentMonth: formatCurrentMonth === format(day, "M"), // 현재 달인지 확인
    };
  });

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  return (
    <CalendarBoxLayout>
      <CalendarBoxWrapper>
        <MonthBox>
          <DateBox>
            <MonthDisplay>
              {formatCurrentMonth}
              <span>월</span>
            </MonthDisplay>
            <YearDisplay>{formatCurrentYear}</YearDisplay>
          </DateBox>
          <ChangeButton>
            <button onClick={handlePrevMonth}>
              <img src={arrowLeft} alt="arrowLeft" />
            </button>
            <button onClick={handleNextMonth}>
              <img
                src={arrowLeft}
                alt="arrowRight"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          </ChangeButton>
        </MonthBox>
        <CalendarBoxContainer>
          <WeekContainer>
            {weeks.map((week) => (
              <CalendarItem key={week}>{week}</CalendarItem>
            ))}
          </WeekContainer>
          <DayContainer>
            {formatDays.map((date) => (
              <Day
                $isCurrentMonth={date.isCurrentMonth}
                $isToday={date.isToday}
                className={date.month}
                key={date.date}
                $isClicked={clickedDate === date.date}
                onClick={() => date.isCurrentMonth && setClickedDate(date.date)}
                $hasItems={date.hasItems}
                $allItemsChecked={date.allItemsChecked}
              >
                <span>{date.day}</span>
                {date.hasItems && (
                  <p>
                    <Circle $isClicked={clickedDate === date.date} />
                  </p>
                )}
              </Day>
            ))}
          </DayContainer>
        </CalendarBoxContainer>
      </CalendarBoxWrapper>
    </CalendarBoxLayout>
  );
};

export default CalendarBox;
