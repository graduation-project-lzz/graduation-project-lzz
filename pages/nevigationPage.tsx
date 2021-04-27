import React, {useEffect, useState} from 'react';
import {List} from '../types';
import {useLists} from './components/useLists';
import Link from 'next/link';

interface Path extends List {
    selected?: boolean

}

export default function Navigation() {
    const {getListNode, Lists} = useLists();
    const [list, setLists] = useState<Array<Path>>([]);
    const [selectedNode, setSelectedNode] = useState<List>();
    const questionLists = ['您的事项区划', '您的业务类型是', '您的事项类型是', '您的事项属于', '您的事项为'];
    useEffect(() => {
            if (Lists) {
                const res = getListNode('001', Lists);
                setLists(i => res ? [...i, {...res, selected: true}] : i);
                setSelectedNode(res);
            }

        }, [Lists]
    );
    const addList = (id: string) => {
        return () => {
            const target = getListNode(id, (Lists as List));
            setLists(i => target ? [...i, {...target}] : i);
            setSelectedNode(i => target ? {...target} : i);
        };
    };


    const revertList = (id: string) => {
        return () => {
            const index = list.findIndex(i => i.id === id);
            const newArray = list.slice(0, index);
            if (newArray.length === 0) {
                setSelectedNode(Lists);
                setLists(i => newArray);
            } else {
                setLists(i => newArray);
                setSelectedNode(newArray.slice(-1)[0]);
            }

        };
    };

    const backLastStep = () => {
        if (list.length === 0) {
            return;
        }
        list.pop();
        console.log(list);
        if (list.length === 0) {
            setSelectedNode(Lists);
            setLists([...list]);

        } else {
            setLists([...list]);
            setSelectedNode(list.slice(-1)[0]);
        }

    };

    const footer = () => {
        return (
            <div className="flex flex-row justify-evenly w-full mt-8">
                <Link href="/">
                    <button type="button" className="w-28 h-8 m-1 bg-blue-400 text-white">
                        回首页
                    </button>
                </Link>
                <button
                    type="button"
                    className="w-28 h-8 m-1 bg-blue-400 text-white"
                    onClick={backLastStep}
                >
                    上一步
                </button>
            </div>
        );
    };
    return (
        <main>
            <div
                className="flex w-full h-20 bg-banner bg-cover max-w-screen-lg justify-center items-center self-center m-auto">
                <div className="font-mono text-2xl font-bold text-white mr-56 pl-2">
                    广州市人力资源与社会保障局智能咨询平台
                </div>
            </div>
            <section className="mx-auto w-5/6 max-w-2xl ">
                <div className="self-center w-full max-w-2xl p-8 my-10 border border-gray-500">
                    <div>
                        您属于情况:
                    </div>


                    <div
                    >

                        {list.map((item, index) => {
                            return (
                                <div
                                    className="grid grid-cols-2 justify-items-start self-center auto-rows-max w-full bg-nevigation border border-nevigation m-1 text-nevigation"
                                    key={item.id + Math.random()}
                                >
                                    <div className="m-1 pl-6">{questionLists[index]}</div>
                                    <button
                                        type="button"
                                        className="m-1 underline text-left focus:outline-none"
                                        onClick={revertList(item.id)}
                                    >
                                        {item.name}
                                    </button>
                                </div>

                            );
                        })}
                    </div>

                    <div
                        className="grid grid-cols-2 justify-items-start self-center auto-rows-max w-full bg-greenSelf border border-nevigation m-1 text-nevigation"
                    >
                        <div className="m-1 pl-6">{questionLists[list.length]}</div>
                        <div>
                            {

                                selectedNode?.children?.map(item => {
                                    return (
                                        <button
                                            type="button"
                                            className="m-1 underline text-left focus:outline-none"
                                            onClick={addList(item.id)}
                                            key={item.id + Math.random()}
                                        >
                                            {item.name}
                                        </button>
                                    );
                                })
                            }
                        </div>

                    </div>
                    {footer()}

                </div>

            </section>

        </main>
    );
}