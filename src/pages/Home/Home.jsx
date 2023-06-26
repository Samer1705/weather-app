import HourlyWeather from "../../components/HourlyWeather/HourlyWeather"
import TodayWeather from "../../components/TodayWeather/TodayWeather"
import Toolbar from "../../components/Toolbar/Toolbar"
import useFetch from "../../hooks/useFetch"
import Icons from "../../assets/icons/icons"
import UVIndex from "../../components/UVIndex/UVIndex"
import WindStatus from "../../components/WindStatus/WindStatus"
import RiseAndSet from "../../components/RiseAndSet/RiseAndSet"
import Humidity from "../../components/Humidity/Humidity"
import Visibility from "../../components/Visibility/Visibility"

const Home = () => {
  const { data, isLoading, error } = useFetch('forecast', 'cairo')
  if (isLoading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <i className="fa-spin fa-c fa-solid fa-3x"></i>
    </div>
  )
  else if (error) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <p className="alert alert-danger">{error}</p>
    </div>
  )
  return (
    <div className='row'>
      <div className="col-md-4">
        <TodayWeather data={data} />
      </div>
      <div className="col-md-8">
        <Toolbar />
        <HourlyWeather data={data} />
        <div className="row m-5 g-4">
          <h2>Todays's Highlights</h2>
          <div className="col-xxl-3 col-md-6">
            <UVIndex uv={data.current.uv}/>
          </div>
          <div className="col-xxl-3 col-md-6">
            <WindStatus wind={data.current.wind_kph}/>
          </div>
          <div className="col-xxl-3 col-md-6">
            <RiseAndSet astro={data.forecast.forecastday[0].astro}/>
          </div>
          <div className="col-xxl-3 col-md-6">
            <Humidity humidity={data.current.humidity}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home