type Props = {
   cls?: string;
   hClick?(): void;
};

export default function IconClose(props: Props): JSX.Element {
   const { cls, hClick } = props;

   const onClick = () => {
      if (typeof hClick === 'function') {
         hClick();
      }
   };

   return (
      <button type="button" className={`iconBtn IconClose ${cls || ''}`} onClick={onClick}>
         <span className="bg_main icon-line rotx_-45" />
         <span className="bg_main icon-line rotx_45" />
      </button>
   );
}
