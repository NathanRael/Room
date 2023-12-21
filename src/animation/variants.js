export const cardVariant = {
    hidden:  { opacity: 0 },
    visible: i => ({ opacity: 1,y : 0, transition : { duration: 0.5, ease: "easeInOut", delay: 0.1 * i } }),
    hover : {scale : 1.1, transition : {duration : 0.3}},
    remove : {opacity : 0, y : -50, scale : 0.9}
  };