import React from 'react';

const Banner: React.FC = () => {
  return (
    <>
    <pre className="banner">
{`
  CCCCC    RRRR    OOOOO  TTTTT  H   H  EEEEE  RRRR   SSSS
 C     C   R   R  O     O   T    H   H  E      R   R  S
 C         RRRR   O     O   T    HHHHH  EEEE   RRRR    SSS
 C     C   R  R   O     O   T    H   H  E      R  R       S
  CCCCC    R   R   OOOOO    T    H   H  EEEEE  R   R  SSSS
`}
    <p className="welcome">Welcome to my terminal portfolio!</p>
    </pre>
    </>
  );
};

export default Banner;