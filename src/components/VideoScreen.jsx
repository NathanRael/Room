export function VideoScreen({youtubeVideoSrc}) {
  return (
    <iframe
      width="560"
      height="315"
      src={youtubeVideoSrc}
      allowFullscreen
      className="_videoScreen rounded-2"
    ></iframe>
  );
}
