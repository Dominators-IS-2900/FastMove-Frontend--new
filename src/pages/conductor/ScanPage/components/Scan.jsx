import React from 'react';
import ScanCard from "../../../../components/conductor/ScanCard/Scan";

function Scan() {
  return (
    <div className="container-fluid">
      <div id="content" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScanCard />
      </div>
    </div>
  );
}

export default Scan;
