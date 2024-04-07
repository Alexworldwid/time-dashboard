import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Activity({ daily, weekly, monthly }) {
    const [jsonDatas, setJsonData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("../api");
            const data = await res.json();
            setJsonData(data);
        } catch(error) {
            console.error("error fetching resource", error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div id='activity' className='rounded-lg ' >
            {jsonDatas.map((data, index) => {
                return (
                    <div className='mb-5 rounded-lg '  key={index}>
                        <div className={`${data.title} rounded-t-xl rounded-b-xl flex flex-col relative`}>
                            <div className='flex justify-end  mr-6 h-7'>
                                <Image className='-p-2' src={data.src} width={40} height={30} alt='design' />
                            </div>
                            
                            <div className='bg-blue-950 p-5 rounded-lg rounded-t-2xl w-full'>
                                <p className="flex justify-between items-center opacity-85 md:text-sm md:mb-4"><span>{data.title}</span> <span>...</span></p>
                                {daily && <p className="flex justify-between items-center opacity-85 md:flex-col md:items-start "><span className='md:text-4xl md:mb-3'>{data.timeframes.daily.current}hrs</span>  <span className='md:text-sm opacity-65'>Last Week-{data.timeframes.daily.previous}hrs</span></p> }
                                {weekly && <p className="flex justify-between items-center opacity-85 md:flex-col md:items-start "><span  className='text-4xl mb-3'>{data.timeframes.weekly.current}hrs</span>  <span className='md:text-sm  opacity-65'>Last Week-{data.timeframes.weekly.previous}hrs</span></p> }
                                {monthly && <p className="flex justify-between items-center opacity-85 md:flex-col md:items-start "><span className='text-4xl mb-3'>{data.timeframes.monthly.current}hrs</span>  <span className='md:text-sm opacity-65'>Last Week-{data.timeframes.weekly.previous}hrs</span></p> }
                            </div>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    );
};

