const group = ["asmr", "bangruk", "bangrak", "sukui", "Sme"];

const MainpageTag = () => {
    const [currentTags, setCurrentTags] = useState([]);
  
    useEffect(() => {
      const determineNextTags = () => {
        const storedTags = JSON.parse(localStorage.getItem('currentTags')) || [];
  
        let newTags = [];
        if (storedTags.length === 0) {
          newTags = group.slice(0, 3);
        } else {
          const currentIndex = group.indexOf(storedTags[storedTags.length - 1]);
          const nextIndex = (currentIndex + 1) % group.length;
          newTags = [
            group[nextIndex],
            group[(nextIndex + 1) % group.length],
            group[(nextIndex + 2) % group.length]
          ];
        }
  
        localStorage.setItem('currentTags', JSON.stringify(newTags));
        return newTags;

        // bring group come keep in currentTags
      };
  
      const nextTags = determineNextTags();
      setCurrentTags(nextTags); // keep in state  = currentTags
    }, []);
  
    return (
      <div>
        {currentTags.map((tag, index) => (
          <TagsComponent key={index} tag={tag} />
        ))}
      </div>
    );
  };
  
  // TagsComponent Component
  const TagsComponent = ({ tag }) => {
      const dispatch = useDispatch();
      const { bangrak, bangruk, asmr, sukui, sme, status, error, page, perPage, hasMoreBangrak, hasMoreBangruk, hasMoreAsmr, hasMoreSukui, hasMoreSme } = useSelector((state) => state.tags);
  
      useEffect(() => {
          dispatch(resetTags());
          dispatch(fetchTags({ page: 1, perPage: perPage, reset: true }));
      }, [dispatch, tag, perPage]);
  
      const loadMore = () => {
          const nextPage = page + 1;
          dispatch(fetchTags({ page: nextPage, perPage: perPage }));
      };
  
      const displayData = tag === 'bangruk' ? bangruk
                      : tag === 'bangrak' ? bangrak
                      : tag === 'asmr' ? asmr
                      : tag === 'sukui' ? sukui
                      : tag === 'sme' ? sme
                      : [];
  
      const router = useRouter();
  
      const handleClick = () => {
          router.push(`/tag/${tag}`);
      };
  
      return (
          <div>
              <button onClick={handleClick}>
                  Go to {tag} Details
              </button>
  
              {status === 'loading' && <p>Loading...</p>}
              {status === 'failed' && <p>Error: {error}</p>}
              {status === 'succeeded' && (
                  <div>
                      <ul>
                          {displayData.map((item, index) => (
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