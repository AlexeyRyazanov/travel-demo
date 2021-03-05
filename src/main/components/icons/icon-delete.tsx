type Props = {
   cls?: string;
   disabled?: boolean;
   hClick(): void;
   size?: 'sm';
};

export default function IconDelete(props: Props): JSX.Element {
   const {
      cls,
      disabled,
      hClick,
      size,
   } = props;

   const onClick = () => {
      if (typeof hClick === 'function' && !disabled) {
         hClick();
      }
   };

   return (
      <button type="button" aria-label="Delete" className={`iconBtn ${cls || ''} ${size === 'sm' ? 'iconBtn_deleteSm' : 'iconBtn_delete'}`} tabIndex={0} onClick={onClick} />
   );
}
