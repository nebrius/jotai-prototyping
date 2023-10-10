'use client';

import { useCurrentUser } from '@rp/common';

import type { ChangeEvent } from 'react';
import { useCallback } from 'react';

import styles from './accountType.module.css';
import { useAccountTypeState } from '../state/accountType';
import type { AccountType } from '../types/accountBootstrapData';

export function AccountType() {
  const currentUser = useCurrentUser();
  const [{ status }, accountType, setAccountType] = useAccountTypeState();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setAccountType(e.target.value as AccountType);
    },
    [setAccountType],
  );

  return (
    <div className={styles.accountTypeContainer}>
      <label>{currentUser.name}&apos;s account type:</label>
      <select
        value={accountType}
        onChange={onChange}
        disabled={status === 'updating'}
      >
        <option value="standard">Standard</option>
        <option value="pro">Pro</option>
      </select>
      {status === 'updating' && <span>Saving...</span>}
    </div>
  );
}
