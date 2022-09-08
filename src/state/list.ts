import { useCallback } from 'react'
import { atom, selector, useRecoilState } from 'recoil'
import { PostAddListRequest, PostAddListResponse } from 'types/api'
import { post } from 'utils'

import {
    initialHomePageStateSelector,
    initialListPageStateSelector,
} from './initialState'

export const allListsAtom = atom({
    key: 'allListsAtom',
    default: selector({
        key: 'allListsAtomInitializer',
        get: ({ get }) => get(initialHomePageStateSelector).lists,
    }),
})

export const currentListAtom = atom({
    key: 'currentListAtom',
    default: selector({
        key: 'currentListAtomInitializer',
        get: ({ get }) => get(initialListPageStateSelector).list,
    }),
})

// Hooks for working with state

export function useAddList() {
    const [allListsValues, setAllLists] = useRecoilState(allListsAtom)
    return useCallback(
        async (body: PostAddListRequest) => {
            const newItem = await post<PostAddListRequest, PostAddListResponse>(
                '/api/list',
                body,
            )
            setAllLists([...allListsValues, newItem])
        },
        [allListsValues, setAllLists],
    )
}
