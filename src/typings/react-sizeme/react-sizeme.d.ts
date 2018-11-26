declare module "react-sizeme" {
  import * as React from 'react'

  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
  
  interface SizeMeProps {
    size: {
      width: number | null;
      height: number | null;
    };
  }
  
  export interface SizeMeOptions {
    monitorWidth?: boolean;
    monitorHeight?: boolean;
    monitorPosition?: boolean;
    refreshRate?: number;
    refreshMode?: 'throttle' | 'debounce';
    noPlaceholder?: boolean;
    children(props: SizeMeProps): JSX.Element;
  }
  
  export class SizeMe extends React.Component<SizeMeOptions> {
  }
  
  export const withSize: (options?: any) => <P extends SizeMeProps>(component: React.ComponentType<P>) => React.ComponentType<Omit<P, 'size'>>;
}
