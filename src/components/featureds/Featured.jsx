import './featured.scss'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Featured({type}) {
  return (
    <div className='featured'>
        {type &&(
            <div className='category'>
<span>{type==="movie"?"Movies":"Series"}</span>
<select name="genre" id="genre">
    <option>General</option>
    <option value="adventure">Adventure</option>
    <option value="comedy">Comedy</option>
    <option value="">General</option>
    <option value="crime">Crime</option>
    <option value="fantasy">Fantasy</option>
    <option value="historical">Historical</option>
    <option value="horror">Horror</option>
    <option value="romance">Romance</option>
    <option value="sci-fi">Sci-Fi</option>
    <option value="western">Western</option>
    <option value="animation">Animation</option>
    <option value="drama">Drama</option>
    <option value="documentary">Documentary</option>
</select>
            </div>
        )}
        <img src="https://images.wondershare.com/filmora/article-images/lucifer-netflix-web-series.jpg" alt="" />

    
        <div className="info">

        <img src="https://i1.wp.com/netflixprimes.com/wp-content/uploads/2020/04/lucifer-netflix-hindi-dubbed.jpg?resize=558%2C355" alt="" />

            <span className='disc'>
                iatis! Maiores recusandae unde impedit ndae unde impedit ndae unde impedit ndae unde impedit ndae unde impedit ndae unde impedit ndae unde impedit nulla.
            </span>
            <div className="buttons">

                <button><PlayCircleFilledOutlinedIcon/>
                <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlinedIcon/>

                    <span>More</span>

                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured