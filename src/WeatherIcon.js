export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <WiDaySunny size={24} color="black" />,
    "01n": <WiNightClear size={24} color="black" />,
    "02d": <WiDayCloudy size={24} color="black" />,
    "02n": <WiNightCloudy size={24} color="black" />,
    "03d": <WiCloudyWindy size={24} color="black" />,
    "03n": <WiNightAltCloudyWindy size={24} color="black" />,
    "04d": <WiCloudyGusts size={24} color="black" />,
    "04n": <WiNightAltCloudyGusts size={24} color="black" />,
    "09d": <WiDayRain size={24} color="black" />,
    "09n": <WiNightAltRain size={24} color="black" />,
    "10d": <WiDayRainMix size={24} color="black" />,
    "10n": <WiNightAltRainMix size={24} color="black" />,
    "11d": <WiDayThunderstorm size={24} color="black" />,
    "11n": <WiNightAltThunderstorm size={24} color="black" />,
    "13d": <WiDaySnowWind size={24} color="black" />,
    "13n": <WiNightAltSnowWind size={24} color="black" />,
    "50d": <WiWindy size={24} color="black" />,
    "50n": <WiStrongWind size={24} color="black" />,
  };
  return class Weather extends React.Component {
    render() {
      return codeMapping[props.code];
    }
  };
}
