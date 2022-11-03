var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _lottieWeb=_interopRequireDefault(require("lottie-web"));var _reactDom=_interopRequireDefault(require("react-dom"));var _View=_interopRequireDefault(require("react-native-web/dist/exports/View"));var _react=_interopRequireWildcard(require("react"));var _this=this,_jsxFileName="/Users/shcoder/Projects/www/rn-web-lottie/index.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Animation=function Animation(props){var animationRef=(0,_react.useRef)(null);var animationDOMNode=(0,_react.useRef)(null);(0,_react.useEffect)(function(){var _animationRef$current;var animationFinishUnsubscribe,animationLoopUnsubscribe=null;if((_animationRef$current=animationRef.current)!=null&&_animationRef$current.destroy){animationRef.current.destroy();}animationRef.current=_lottieWeb.default.loadAnimation(Object.assign({autoplay:props.autoPlay,loop:props.loop||false,renderer:'svg',container:animationDOMNode.current,rendererSettings:props.rendererSettings||{}},props.source.uri&&typeof props.source.uri==='string'?{path:props.source.uri}:{animationData:props.source}));if(props.speed!==undefined){animationRef.current.setSpeed(props.speed);}if(props.onAnimationFinish){animationFinishUnsubscribe=animationRef.current.addEventListener('complete',props.onAnimationFinish);}if(props.onAnimationLoop){animationLoopUnsubscribe=animationRef.current.addEventListener('loopComplete',props.onAnimationFinish);}return function(){animationFinishUnsubscribe&&animationFinishUnsubscribe();animationLoopUnsubscribe&&animationLoopUnsubscribe();};},[]);(0,_react.useImperativeHandle)(animationRef,function(){return{play:play,reset:reset,resume:play,pause:pause};});var play=function play(){if(animationRef.current){return animationRef.current.play();}};var reset=function reset(){if(animationRef.current){return animationRef.current.stop();}};var pause=function pause(){if(animationRef.current){return animationRef.current.pause();}};return _react.default.createElement(_View.default,{style:props.style,ref:function ref(_ref){return animationDOMNode.current=_reactDom.default.findDOMNode(_ref);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:10}});};var _default=_react.default.forwardRef(function(props,ref){return _react.default.createElement(Animation,(0,_extends2.default)({},props,{ref:typeof ref=='function'?function(c){return ref(c&&c.anim);}:ref,__self:_this,__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:3}}));});exports.default=_default;