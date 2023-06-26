import useFetch from "../../hooks/useFetch"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

const TodayWeather = ({ data }) => {
    let date = data.location.localtime.slice(0, 10)
    let time = data.location.localtime.slice(10)
    return (
        <div className="bg-card shadow rounded-end-4 p-5 fs-5 h-100">
            <div>
                <WeatherIcon weather={data.current.condition.text} isDay={data.current.is_day} />
                <h2 className="fa-5x fw-light">{data.current.temp_c} C</h2>
                <div className="d-flex justify-content-between">
                    <h2>{data.location.name}</h2>
                    <h3>{date}</h3>
                </div>
                <hr />
                <p><i className="fa-solid fa-podcast mx-2"></i>{data.current.condition.text}</p>
                <p><i className="fa-regular fa-clock mx-2"></i>{time}</p>
            </div>
        </div>
    )
}

export default TodayWeather