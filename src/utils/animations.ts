type AnimationArgs = { name: string; delay: string };

const animation = ({ name, delay }: AnimationArgs) => {
  return {
    animationName: name,
    animationDelay: delay,
    animationFillMode: "both",
    animationDuration: "700ms",
    animationDirection: "normal",
    animationTimingFunction: "ease",
  };
};

export const slideInDownAnimate = (delay: string) =>
  animation({ name: "slideInDown", delay });

export const slideInupAnimate = (delay: string) =>
  animation({ name: "slideInUp", delay });

export const zoomInAnimate = (delay: string) =>
  animation({ name: "zoomIn", delay });

export const zoomOutAnimate = (delay: string) =>
  animation({ name: "zoomOut", delay });

export const fadeInAnimate = (delay: string) =>
  animation({ name: "fadeIn", delay });

export const slideInLeftAnimation = (delay: string) =>
  animation({ name: "slideInLeft", delay });

export const slideInRightAnimation = (delay: string) =>
  animation({ name: "slideInRIght", delay });

export const rotateInAnimation = (delay: string) =>
  animation({ name: "rotateIn", delay });

export const bounceInAnimation = (delay: string) =>
  animation({ name: "bounceIn", delay });

export const bounceInRightAnimation = (delay: string) =>
  animation({ name: "bounceInRight", delay });

export const bounceInLeftAnimation = (delay: string) =>
  animation({ name: "bounceInLeft", delay });

export const bounceInDownAnimation = (delay: string) =>
  animation({ name: "bounceInDown", delay });

export const bounceInUpAnimation = (delay: string) =>
  animation({ name: "bounceInUp", delay });

export const flipInXAnimation = (delay: string) =>
  animation({ name: "flipInX", delay });

export const flipInYAnimation = (delay: string) =>
  animation({ name: "flipInY", delay });

export default animation;
