"use client";

import * as React from "react";

// Render props pattern for flexible data fetching
export interface DataFetcherState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export interface DataFetcherProps<T> {
  fetcher: () => Promise<T>;
  children: (state: DataFetcherState<T>) => React.ReactNode;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  immediate?: boolean;
}

function DataFetcher<T>({ 
  fetcher, 
  children, 
  onSuccess, 
  onError, 
  immediate = true 
}: DataFetcherProps<T>) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetcher();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred');
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [fetcher, onSuccess, onError]);

  React.useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  const state: DataFetcherState<T> = {
    data,
    loading,
    error,
    refetch: fetchData,
  };

  return <>{children(state)}</>;
}

// Higher-order component pattern for data fetching
export interface WithDataFetcherProps<T> {
  dataState: DataFetcherState<T>;
}

export function withDataFetcher<T, P extends WithDataFetcherProps<T>>(
  Component: React.ComponentType<P>,
  fetcher: () => Promise<T>,
  options?: {
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
    immediate?: boolean;
  }
) {
  const WrappedComponent = (props: Omit<P, keyof WithDataFetcherProps<T>>) => {
    return (
      <DataFetcher
        fetcher={fetcher}
        onSuccess={options?.onSuccess}
        onError={options?.onError}
        immediate={options?.immediate}
      >
        {(dataState) => (
          <Component {...(props as P)} dataState={dataState} />
        )}
      </DataFetcher>
    );
  };

  WrappedComponent.displayName = `withDataFetcher(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}

export { DataFetcher };
