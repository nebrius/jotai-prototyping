'use client';

import { useCallback, useState } from 'react';

type Status = 'idle' | 'updating' | 'success' | 'error';

export function createUseAsyncUpdateStateHook<StrapValue>(
  useStrapState: () => readonly [
    currentValue: StrapValue,
    (newValue: StrapValue) => void,
  ],
  updater: (
    newValue: StrapValue,
    setStatus: (newStatus: Status) => void,
    setValue: (newValue: StrapValue) => void,
  ) => Promise<void>,
) {
  return () => {
    const [status, setStatus] = useState<Status>('idle');
    const [strapValue, setStrapValue] = useStrapState();

    const setValueInternal = useCallback(
      async (newValue: StrapValue) =>
        updater(newValue, setStatus, setStrapValue),
      [setStrapValue, setStatus],
    );

    // Do this to hide the promise, which we don't want components using
    const setValue = useCallback(
      (newValue: StrapValue) => {
        void setValueInternal(newValue);
      },
      [setValueInternal],
    );

    return [{ status }, strapValue, setValue] as const;
  };
}
