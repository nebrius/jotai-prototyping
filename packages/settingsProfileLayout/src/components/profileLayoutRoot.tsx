'use client';

import { ProfileDescription } from './profileDescription';
import { ProfileProvider } from '../state/profileStrap';
import type { ProfileBootstrapData } from '../types/profileBootstrapData';

interface ProfileLayoutRootProps {
  bootstrapData: ProfileBootstrapData;
}

export function ProfileLayoutRoot({ bootstrapData }: ProfileLayoutRootProps) {
  return (
    <ProfileProvider bootstrapData={bootstrapData}>
      <ProfileDescription />
    </ProfileProvider>
  );
}
