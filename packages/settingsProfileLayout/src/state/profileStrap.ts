'use client';

import { createStrap } from 'react-strapped';

import type { ProfileBootstrapData } from '../types/profileBootstrapData';

export const {
  createUseStrappedValue,
  createUseStrappedState,
  Provider: ProfileProvider,
} = createStrap<ProfileBootstrapData>();
