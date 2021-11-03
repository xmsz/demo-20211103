import { useHistory } from 'ice';
import { PropsWithChildren } from 'react';

function FrameworkLayout({ children }: PropsWithChildren<{}>) {
  console.log(2, useHistory());
  return (
    <div>
      FrameworkLayout
      {children}
    </div>
  );
}

export default FrameworkLayout;
