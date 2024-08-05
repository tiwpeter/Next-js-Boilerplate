"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags, fetchPantipData } from '@/features/tagsReducer'; // Ensure correct path

const TagPage = ({ params }: { params: { tag: string } }) => {
    const { tag } = params; // Use route params
    const dispatch = useDispatch();
    const {
        bangrak,
        bangruk,
        asmr,
        sukui,
        sme,
        status,
        error,
        page,
        perPage,
        hasMoreBangrak,
        hasMoreBangruk,
        hasMoreAsmr,
        hasMoreSukui,
        hasMoreSme,
        pantipData, // New state for Pantip data
    } = useSelector((state) => state.tags);

    useEffect(() => {
        if (tag) {
            dispatch(fetchTags({ page: 1, perPage: perPage, reset: true }));
            if (tag === 'bangrak') {
                dispatch(fetchPantipData(tag));
            }
        }
    }, [dispatch, tag, perPage]);

    const displayData = tag === 'bangruk' ? bangruk : tag === 'bangrak' ? bangrak : tag === 'asmr' ? asmr : tag === 'sukui' ? sukui : tag === 'sme' ? sme : [];

    const loadMore = () => {
        const nextPage = page + 1;
        dispatch(fetchTags({ page: nextPage, perPage: perPage }));
    };

    return (
        <div>
            <h1>Details for {tag}</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <div>
                   

                    <h2>Tags Data</h2>
                    <ul>
                        {displayData.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a> - {item.text}
                            </li>
                        ))}
                    </ul>
                    {tag === 'bangruk' && hasMoreBangruk && <button onClick={loadMore}>Load More</button>}
                    {tag === 'bangrak' && hasMoreBangrak && <button onClick={loadMore}>Load More</button>}
                    {tag === 'asmr' && hasMoreAsmr && <button onClick={loadMore}>Load More</button>}
                    {tag === 'sukui' && hasMoreSukui && <button onClick={loadMore}>Load More</button>}
                    {tag === 'sme' && hasMoreSme && <button onClick={loadMore}>Load More</button>}
                </div>
            )}
        </div>
    );
};

export default TagPage;
