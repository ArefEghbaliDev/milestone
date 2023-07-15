'use client';

import { Hydrate, HydrateProps } from '@tanstack/react-query';

export default function ReactHydrate(props: HydrateProps) {
    return <Hydrate {...props} />;
}
