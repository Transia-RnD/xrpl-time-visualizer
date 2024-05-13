import React from 'react';

// Define the shape of the results prop
export type ConversionResultsProps = {
  results: Record<string, any>;
};

const ConversionResults: React.FC<ConversionResultsProps> = ({ results }) => {
  const resultMap = Object.entries(results).map(([type, value]) => {
    return <p key={type}>{`${type}: ${value}`}</p>;
  }).filter((m: any) => m !== null);

  return (
    <div id="conversionResults">
      {resultMap.length > 0 ? resultMap : 'No Results'}
    </div>
  );
};

export default ConversionResults;