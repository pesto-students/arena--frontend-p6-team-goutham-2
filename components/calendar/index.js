import React, { useState } from 'react';
import ReactCalendar from "react-calendar"
import { add, format } from "date-fns";
import { CLOSING_TIME, TOTALHOURSINMINUTES, OPENING_TIME } from '../../constants/config';

export default function Calendar() {
    const [date, setDate] = useState({
        justDate: null,
        dateTime: null
    })
    const getTimes = () => {
        if (!date.justDate) return
        const { justDate } = date
        const beginning = add(justDate, { hours: OPENING_TIME });
        const end = add(justDate, { hours: CLOSING_TIME });
        const totalHours = TOTALHOURSINMINUTES; //in minutes
        const times = []
        for (let i = beginning; i <= end; i = add(i, { minutes: TOTALHOURSINMINUTES })) {
            times.push(i)
        }
        return times;
    }
    const times = getTimes()
    return (
        <>

            <div className='flex h-screen flex-col items-center justify-center'>
                {date.justDate ? 
                    <div className='flex gap-4'>
                        {times.map((time, i) => {
                            console.log(time, "time.......")
                            return (
                                <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
                                    <button type='button' onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}>
                                        {format(time, 'kk:mm')}
                                    </button>
                                </div>
                            )
                        })}
                    </div> : <>
                    <ReactCalendar minDate={new Date()} className="REACT-CALENDAR p-2" view='month' onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))} />
                </>}

            </div>
        </>
    );
}
