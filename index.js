import lottie from 'lottie-web';
import ReactDOM from 'react-dom';
import { View } from 'react-native';
import React, { useEffect, useRef, useImperativeHandle } from 'react';
/* {
  + play,
  + reset,
  + pause,
  + resume,
  + source,
  + speed,
  + loop,
  + style,
  + autoPlay,
  duration,
  progress,
  autoSize,
  resizeMode,
  renderMode,
  colorFilters,
  + onAnimationLoop,
  imageAssetsFolder,
  + onAnimationFinish,
} */

const Animation = props => {
  const animationRef = useRef(null);
  const animationDOMNode = useRef(null);

  useEffect(() => {
    let animationFinishUnsubscribe,
      animationLoopUnsubscribe = null;

    if (animationRef.current?.destroy) {
      animationRef.current.destroy();
    }

    animationRef.current = lottie.loadAnimation({
      autoplay: props.autoPlay,
      loop: props.loop || false,
      renderer: 'svg',
      container: animationDOMNode.current,
      rendererSettings: props.rendererSettings || {},
      ...(props.source.uri && typeof props.source.uri === 'string'
        ? { path: props.source.uri }
        : { animationData: props.source }),
    });

    if (props.speed !== undefined) {
      animationRef.current.setSpeed(props.speed);
    }

    if (props.onAnimationFinish) {
      animationFinishUnsubscribe = animationRef.current.addEventListener('complete', props.onAnimationFinish);
    }

    if (props.onAnimationLoop) {
      animationLoopUnsubscribe = animationRef.current.addEventListener('loopComplete', props.onAnimationFinish);
    }

    return () => {
      animationFinishUnsubscribe && animationFinishUnsubscribe();
      animationLoopUnsubscribe && animationLoopUnsubscribe();
    };
  }, []);

  useImperativeHandle(animationRef, () => ({ play, reset, resume: play, pause }));

  const play = () => {
    if (animationRef.current) {
      return animationRef.current.play();
    }
  };

  const reset = () => {
    if (animationRef.current) {
      return animationRef.current.stop();
    }
  };

  const pause = () => {
    if (animationRef.current) {
      return animationRef.current.pause();
    }
  };

  return <View style={props.style} ref={ref => (animationDOMNode.current = ReactDOM.findDOMNode(ref))} />;
};

export default React.forwardRef((props, ref) => (
  <Animation {...props} ref={typeof ref == 'function' ? c => ref(c && c.anim) : ref} />
));
