import { useContext } from "react";
import DataContext from "../context/DataContext";
export function VideoScreen({youtubeVideoSrc}) {
  const {width} = useContext(DataContext)
  return (
    <iframe
      width={`${width <= 570 ?  '560' : '750' }`}
      height={`${width <= 570 ? '315' : '420' }`}
      src={`https://www.youtube.com/embed/${youtubeVideoSrc}`}
      allowFullScreen
      className="_videoScreen rounded-2"
    ></iframe>
  );
}
