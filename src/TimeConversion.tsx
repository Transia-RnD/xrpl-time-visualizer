import React, { useState } from "react";
import ConversionResults, { ConversionResultsProps } from "./ConversionResults";
import { rippleTimeToUnixTime, unixTimeToRippleTime } from "xrpl";

function convertToSec(timestamp: number): number {
  if (timestamp.toString().length === 10) {
    timestamp = timestamp * 1000;
    return timestamp;
  } else return timestamp;
}

const TimeConversion: React.FC = () => {
  const [dtInput, setDtInput] = useState<string | number>("");
  const [conversionResults, setConversionResults] =
    useState<ConversionResultsProps>(undefined);

  function convertFromTime(): void {
    let results: Record<string, any> = {};
    try {
      const dt = rippleTimeToUnixTime(Number(dtInput));
      if (dt.toString().length >= 16) {
        // @ts-expect-error -- ignore
        setConversionResults(results);
        return
      }
      results.xrplTime = Number(dtInput);
      results.timestamp = dt;
      results.date = new Date(dt);
      // @ts-expect-error -- ignore
      setConversionResults(results);
    } catch (error) {
      console.log(error);
    }
  }

  function convertToTime(): void {
    let results: Record<string, any> = {};
    if (isNaN(Number(dtInput))) {
      try {
        const date = new Date(String(dtInput));
        const dt = date.getTime();
        const xrplTime = unixTimeToRippleTime(dt);
        results.xrplTime = xrplTime;
        results.timestamp = dt;
        results.date = date;
        // @ts-expect-error -- ignore
        setConversionResults(results);
      } catch (error) {
        console.log(error);
      }
    } else {
      const dt = convertToSec(Number(dtInput));
      try {
        const date = new Date(dt);
        const xrplTime = unixTimeToRippleTime(dt);
        if (xrplTime < 0) {
          // @ts-expect-error -- ignore
          setConversionResults(results);
        }
        results.xrplTime = xrplTime;
        results.timestamp = dt;
        results.date = date;
        // @ts-expect-error -- ignore
        setConversionResults(results);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setDtInput(event.target.value);
  };

  return (
    <div>
      <h1>Xrpl Time Visualizer</h1>
      <p>
        Paste a date string, datetimestamp or ripple timestamp below to convert
        it in various types.
      </p>
      <input
        type="text"
        value={dtInput}
        onChange={handleInputChange}
        placeholder="Enter date/datetime"
        size={50}
      />
      <button onClick={convertFromTime}>From XRPL Time</button>
      <button onClick={convertToTime}>To XRPL Time</button>

      <h2>Conversion Results</h2>
      <div>
        {conversionResults && <ConversionResults results={conversionResults} />}
      </div>
    </div>
  );
};

export default TimeConversion;
