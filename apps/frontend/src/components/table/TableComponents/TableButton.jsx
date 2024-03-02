import Button from '../../Button';

export default function TableButton({ label, onClick, isDisabled }) {
  return (
    <Button
      size='sm'
      label={label}
      onClick={onClick}
      isDisabled={isDisabled}
      className='rounded border px-3 py-2 hover:bg-slate-200 active:bg-slate-300'
    />
  );
}
