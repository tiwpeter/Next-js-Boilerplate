"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags, resetTags } from '../../../../features/tagsReducer';
import { useRouter } from "next/navigation";

const TagsComponent = ({ tag }) => {
    const dispatch = useDispatch();
    const { bangrak, bangruk, asmr, sukui, sme, status, error, page, perPage, hasMoreBangrak, hasMoreBangruk, hasMoreAsmr, hasMoreSukui, hasMoreSme } = useSelector((state) => state.tags);
    const router = useRouter();

    useEffect(() => {
        // Reset tags when the component mounts or the tag changes
        dispatch(resetTags());
        dispatch(fetchTags({ page: 1, perPage: perPage, reset: true }));

        // Add console.log to check tag prop console.log('Tag Prop:', tag); 
    }, [dispatch, tag, perPage]);

    const loadMore = () => {
        const nextPage = page + 1;
        dispatch(fetchTags({ page: nextPage, perPage: perPage }));
    };

    const handleClick = () => {
        router.push(`/tag/${tag}`);
    };

    return (
        <div>
          {/**   <button onClick={handleClick}>Go to {tag} Details</button>*/}

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <div>
                    <ul>
                        {tag === 'bangruk' && bangruk.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a> - {item.text}
                            </li>
                        ))}
                        {tag === 'bangrak' && bangrak.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a> - {item.text}
                            </li>
                        ))}
                        {tag === 'asmr' && asmr.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a> - {item.text}
                            </li>
                        ))}
                        {tag === 'sukui' && sukui.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a> - {item.text}
                            </li>
                        ))}
                        {tag === 'sme' && sme.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a> - {item.text}
                            </li>
                        ))}
                    </ul>
                    {tag === 'bangruk' && hasMoreBangruk && (
                        <button onClick={loadMore}>Load More</button>
                    )}
                    {tag === 'bangrak' && hasMoreBangrak && (
                        <button onClick={loadMore}>Load More</button>
                    )}
                    {tag === 'asmr' && hasMoreAsmr && (
                        <button onClick={loadMore}>Load More</button>
                    )}
                    {tag === 'sukui' && hasMoreSukui && (
                        <button onClick={loadMore}>Load More</button>
                    )}
                    {tag === 'sme' && hasMoreSme && (
                        <button onClick={loadMore}>Load More</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TagsComponent;
