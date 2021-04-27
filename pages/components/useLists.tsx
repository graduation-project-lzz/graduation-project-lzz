import React from 'react';
import useSWR from 'swr';
import {List} from '../../types';
import _ from 'underscore';

interface props {
    level?: number,
    id?: string
}

const initalList = {
    id: '',
    parent: null
};

const fetcher = (url: string) => fetch(url).then(res => res.json());


export const useLists = (level?: number, id?: string) => {
    const {data, error} = useSWR<List>('/api/lists', fetcher);
    const getListNode = (id: string, target: List): List | undefined => {
        if (target.id === id) {
            return target;
        }
        if ('children' in target) {
            for (let i = 0; i < target.children!.length; i++) {

                const res = getListNode(id, target.children![i]);
                if (res) {
                    return res;
                }

            }
        } else {
            return;
        }
        return;
    };
    return {
        data: data?.children || [],
        Lists: data,
        error,
        getListNode
    };

};