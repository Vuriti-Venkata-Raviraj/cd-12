// Write your code here.
import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  render() {
    const {imagesList, getId, changeOpacity} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = imagesList

    const getCurrentId = () => {
      getId(id)
    }

    return (
      <li className="list-item">
        <button>
          <img
            className={`thumbnail-img + ${changeOpacity}`}
            src={thumbnailUrl}
            alt={thumbnailAltText}
            onClick={getCurrentId}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
