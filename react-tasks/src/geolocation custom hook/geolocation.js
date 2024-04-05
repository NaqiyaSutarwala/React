import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

const GeoLocation = () => {
  const [countClicks, setCountClicks] = useState(0);

  const { isLoading, position, error, getPosition } = useGeolocation();
  const { lat, lng } = position;

  const handlCountClicks = () => {
    setCountClicks((count) => count + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          getPosition();
          handlCountClicks();
        }}
        disabled={isLoading}
      >
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
};

export default GeoLocation;
