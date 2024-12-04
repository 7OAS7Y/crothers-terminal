import React from 'react';

const Banner: React.FC = () => {
  return (
    <>
    <pre className="banner">
    {`
   JJJJJ   OOOOO  SSSS  H   H  U   U   A       CCCCC    RRRR    OOOOO  TTTTT  H   H  EEEEE  RRRR   SSSS
     J    O     O S     H   H  U   U  A A     C     C   R   R  O     O   T    H   H  E      R   R  S
     J    O     O  SSS  HHHHH  U   U AAAAA   C          RRRR   O     O   T    HHHHH  EEEE   RRRR    SSS
 J   J    O     O     S H   H  U   U A   A    C     C   R  R   O     O   T    H   H  E      R  R       S
  JJJ      OOOOO  SSSS  H   H   UUU  A   A     CCCCC    R   R   OOOOO    T    H   H  EEEEE  R   R  SSSS
`}
    <p className="welcome">Welcome to my terminal portfolio!</p>
    </pre>
    </>
  );
};

export default Banner;