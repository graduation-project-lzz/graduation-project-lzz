import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useSWR, {SWRResponse} from 'swr';
import Card from './components/card';
import {useState} from 'react';
import {useLists} from './components/useLists';


export default function Home() {


    const {data, error,Lists} = useLists();

    return (
        <div className=" border lg-w-9/12 max-w-screen-lg m-auto">
            <header className="flex  justify-between m-4    ">
                <div className="text-purple">
                    <Image src={'/u89.png'} width={400} height={20}/>
                    {/*广州市人力资源与社会保障局*/}
                </div>
                <div className="hidden md:block">
                    事项咨询
                </div>
                <div className="hidden md:block">
                    查询你要找的事项
                </div>
            </header>

            <main className="border-gray-400 text-lg
            flex flex-col
            lg-w-96
            bg-gray

            ">
                <section className="border bg-header bg-cover h-40 md:w-full   ">
                    <div className="text-2xl">
                        广州人社 为您解决事项咨询最后一公里问题
                    </div>
                    <div className="text-sm m-2">
                        广州人社为您提供866项事项咨询，打造一站式事项咨询平台
                    </div>
                    <div className="flex flex-row">
                        <Link href={{pathname: '/nevigationPage', query: {id: '001'}}}>
                            <button
                                type="button"
                                className="w-32 h-8 text-sm text-white bg-blue-800 m-1"
                            >
                                区级事项
                            </button>
                        </Link>
                        <Link href={{pathname: '/nevigationPage', query: {id: '257'}}}>
                            <button
                                type="button"
                                className="w-32 h-8 text-sm text-white bg-blue-800 m-1"
                            >
                                市级事项
                            </button>
                        </Link>
                    </div>
                </section>
                <section className="flex justify-center text-center   text-base ">
                    <div className="grid grid-cols-2 self-center divide-x divide-gray-400 m-2 p-1">
                        <div
                            id="dt"
                            className="w-24 text-center font-bold text-blue-600 cursor-pointer"
                        >
                            区级
                        </div>
                        <div
                            id="mcy"
                            className="w-24 text-center cursor-pointer"

                        >
                            市级
                        </div>
                    </div>
                </section>
                <section className="flex justify-center text-center items-start  flex-wrap border "
                >
                    {
                        Lists?.children?.map(item => {
                            return (
                                <Card
                                    name={item.name}
                                    key={item.id}
                                />
                            );
                        })
                    }


                </section>


            </main>

        </div>
    );
}
