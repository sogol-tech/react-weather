import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloudyWindy,
  WiNightAltCloudyWindy,
  WiCloudyGusts,
  WiNightAltCloudyGusts,
  WiDayRain,
  WiNightAltRain,
  WiDayRainMix,
  WiNightAltRainMix,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiDaySnowWind,
  WiNightAltSnowWind,
  WiWindy,
  WiStrongWind,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <WiDaySunny size={40} color="black" />,
    "01n": <WiNightClear size={40} color="black" />,
    "02d": <WiDayCloudy size={40} color="black" />,
    "02n": <WiNightCloudy size={40} color="black" />,
    "03d": <WiCloudyWindy size={40} color="black" />,
    "03n": <WiNightAltCloudyWindy size={40} color="black" />,
    "04d": <WiCloudyGusts size={40} color="black" />,
    "04n": <WiNightAltCloudyGusts size={40} color="black" />,
    "09d": <WiDayRain size={40} color="black" />,
    "09n": <WiNightAltRain size={40} color="black" />,
    "10d": <WiDayRainMix size={40} color="black" />,
    "10n": <WiNightAltRainMix size={40} color="black" />,
    "11d": <WiDayThunderstorm size={40} color="black" />,
    "11n": <WiNightAltThunderstorm size={40} color="black" />,
    "13d": <WiDaySnowWind size={40} color="black" />,
    "13n": <WiNightAltSnowWind size={40} color="black" />,
    "50d": <WiWindy size={40} color="black" />,
    "50n": <WiStrongWind size={40} color="black" />,
  };

  return codeMapping[props.code];
}
