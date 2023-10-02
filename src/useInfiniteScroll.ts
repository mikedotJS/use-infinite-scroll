import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

interface InfiniteScrollResult<T> {
  data: T[];
  loading: boolean;
}

function useInfiniteScroll<T>(
  fetchDataFunction: (page: number) => Promise<T[]>
): InfiniteScrollResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const throttledLoadMoreData = throttle(async () => {
    setLoading(true);

    try {
      const newData = await fetchDataFunction(page);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading more data:", error);
    } finally {
      setLoading(false);
    }
  }, 1000);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight &&
        !loading
      ) {
        throttledLoadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, throttledLoadMoreData]);

  return { data, loading };
}

export default useInfiniteScroll;
