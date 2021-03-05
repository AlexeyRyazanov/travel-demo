// import { RefObject, ReactNode, Component, createRef } from 'react';

// const stackBlurImage = require('./BlurAlg');

// type Props = {
//    blurRadius?: number;
//    children?: ReactNode;
//    className?: string;
//    enableStyles?: boolean;
//    imgSrc: string;
//    imgSrcWebp?: string;
//    onLoadFunction?: Function;
//    resizeInterval?: number;
// }

// @observer
// class BlurOld extends Component<Props, {}> {

//    container: RefObject<HTMLDivElement | null>;
//    canvas: RefObject<HTMLCanvasElement | null>;

//    @observable img: HTMLImageElement = new Image();
//    @observable width: number;
//    @observable height: number;
//    @observable last: number;

//    constructor(props) {
//       super(props);
//       this.container = createRef();
//       this.canvas = createRef();
//    }

//    componentDidMount() {
//       // this.setDimensions();
//       this.loadImage();
//       window.addEventListener('resize', this._resize, false);
//    }

//    componentWillUnmount() {
//       window.removeEventListener('resize', this._resize, false);
//    }

//    /* componentDidUpdate() {
//       if (!this.img) {
//          this.loadImage();
//       } else if (!this.isCurrentImgSrc(this.props.imgSrc)) {
//          this.img.src = this.props.imgSrc;
//          this.setDimensions();
//       } else {
//          // if some other prop changed reblur
//          this.blurProcess();
//       }
//    } */

//    imgSrcReaction = reaction(
//       () => [
//          this.props.imgSrc,
//          this.props.blurRadius
//       ],
//       () => {
//          if (!this.isCurrentImgSrc(this.props.imgSrc)) {
//             this.img.src = this.props.imgSrc;
//             this.setDimensions();
//             this.blurProcess();
//          }
//       }
//    );

//    isCurrentImgSrc = (newSrc: string): boolean => {
//       return this.img && this.img.src === newSrc;
//    }

//    blurProcess = (): void => {
//       stackBlurImage(
//          this.img,
//          this.canvas.current,
//          this.props.blurRadius,
//          this.width,
//          this.height
//       );
//    }

//    doResize = (): void => {
//       this.setDimensions();
//       this.blurProcess();
//    }

//    @action setDimensions = (): void => {
//       this.width = this.container.current.getBoundingClientRect().width;
//       this.height = this.container.current.getBoundingClientRect().height;
//    }

//    @action loadImage = (): void => {
//       const { imgSrc, onLoadFunction, } = this.props;

//       if (this.isCurrentImgSrc(imgSrc)) {
//          this.blurProcess();

//          return;
//       }

//       this.img.src = imgSrc;
//       this.img.crossOrigin = 'Anonymous';

//       this.img.onload = event => {
//          this.blurProcess();

//          if (typeof onLoadFunction === 'function') {
//             onLoadFunction(event);
//          }
//       };

//       this.img.onerror = event => {
//          // Remove the onerror listener.
//          // Preventing recursive calls caused by setting this.img.src to a falsey value
//          this.img.onerror = undefined;

//          this.img.src = '';

//          if (typeof onLoadFunction === 'function') {
//             onLoadFunction(event);
//          }
//       };

//       this.setDimensions();
//    }

//    @action _resize = (): void => {
//       const now = new Date().getTime();
//       let deferTimer;
//       const threshhold = this.props.resizeInterval || 128;

//       if (this.last && now < this.last + threshhold) {
//          clearTimeout(deferTimer);
//          deferTimer = setTimeout(() => {
//             this.last = now;
//             this.doResize();
//          }, threshhold);
//       } else {
//          this.last = now;
//          this.doResize();
//       }
//    }

//    render() {
//       const { children, className } = this.props;

//       return (
//          <div className={`${className ? className : ''}`} ref={this.container}>
//             <canvas className="absolute fill" ref={this.canvas} width={this.width} height={this.height} />
//             {children}
//          </div>
//       );
//    }
// }

// export default BlurOld;
