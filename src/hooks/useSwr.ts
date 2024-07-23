"use client";

import useSWR from "swr";

export interface FetcherType {
    data: any[];
    isLoading: boolean;
    error: any;
}

const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
};

interface UseSwrOptions {
  url: string;
  params?: Record<string, any>;
}

const useSwr = ({ url, params }: UseSwrOptions): FetcherType => {
  const fullUrl = new URL(url);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      fullUrl.searchParams.append(key, value);
    });
  }

  const { data, error, isValidating: isLoading } = useSWR(fullUrl.toString(), fetcher);

  return { data, error, isLoading };
};

export default useSwr;
