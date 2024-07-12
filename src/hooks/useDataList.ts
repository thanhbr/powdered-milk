import { useCallback } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { delayResult } from "@/utils/delay";

const useDataList = ({ fetcher, filter, queryOptions, mappingData = (res: object[]) => res }) => {
  const fetchData = useCallback(
    ({ signal }) =>
      delayResult(
        fetcher({
          data: {
            size: 10,
            ...filter,
          },
          signal: signal,
        }),
        300,
      ).then((res) => res.data),
    [filter],
  );

  const { data, isFetching, error, refetch } = useQuery({
    ...queryOptions,
    queryKey: [filter],
    queryFn: fetchData,
    select: mappingData,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    isFetching,
    error,
    refetch,
  };
};

export default useDataList;
