import { useState, useEffect } from 'react';
import { Meta, Links, Scripts } from 'remix';
import { ArrowRight } from './Icons';

type Item = {
  value: string | null;
  label: string | null;
}

export interface Props {
  title: string;
  values: Item[];
  setter: any;
  initialValue: Item;
}

// TODO: onChange function
// make dropped values absolute instead of block, so that once the dd is open it doens't displace elems

const Dropdown = (props: Props) => {
  const { title, setter, values, initialValue } = props;

  const [selectedValue, setSelectedValue] = useState<Item>({
    value: null,
    label: `SELECT ${title}`,
  });
  const [valuesArray, setValuesArray] = useState<Array<Item>>([
    { value: null, label: '' },
  ]);
  const [open, setOpen] = useState<boolean>(false);

  const onItemClick = (item: Item) => {
    setSelectedValue(item);
    setter(item);
    setOpen(false);
  };

  const itemStyles = 'border-t-[1px] pl-4 pr-4 pt-2 pb-2'

  const dropdownSelections = () => (
    <div className="">
      {valuesArray.map((item) => {
        // eslint-disable-next-line array-callback-return
        if (JSON.stringify(item) === JSON.stringify(selectedValue)) {
          return (
            <div
              key={item.value}
              className={`bg-zinc-700 ${itemStyles}`}
              onClick={() => onItemClick(item)}
              onKeyDown={() => onItemClick(item)}
              role="menuitem"
              tabIndex={0}
            >
              <div className="flex flew-col w-full justify-between">
                <p className="text-small font-small">{item.label}</p>
              </div>
            </div>
          );
        }
        return (
          <div
            key={item.value}
            className={itemStyles}
            onClick={() => onItemClick(item)}
            onKeyDown={() => onItemClick(item)}
            role="menuitem"
            tabIndex={0}
          >
            <div className="flex flew-col w-full justify-between">
              <p className="text-small font-small">{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  useEffect(() => {
    setValuesArray(values);
    if (initialValue && valuesArray[0]?.value === null) {
      setSelectedValue(initialValue);
      setter(initialValue);
    } else if (!(valuesArray[0]?.value === null)) {
      let forceUpdate = true;
      valuesArray.forEach((v) => {
        if (v.value === selectedValue.value) {
          forceUpdate = false;
        }
      });
      if (forceUpdate) setSelectedValue(valuesArray[0]);
    }
  }, [values]);

  // useEffect(() => open, [open]);

  const DropdownOnClick = (set: boolean) => {
    setOpen(set);
  };

  return (
    <div className='w-full'>
      <label className="text-pre font-bold">{title}</label>
      <div
        className="text-pre w-full text-primary bg-transparent border-2 rounded-md flex flex-col"
        onClick={() => DropdownOnClick(!open)}
        onMouseLeave={() => DropdownOnClick(false)}
      >
		<div className=''>
			<div className='flex flew-col w-full justify-between pl-4 pr-4 pt-2 pb-2'>
				<p className="text-small font-small">
					{selectedValue.label}
				</p>
				<div className="w-[12px] h-[12px]">
					{/** TODO: how to rotate this smoothly once dropdown is opened, same with the dropdown selections */}
					<ArrowRight color='fill-primary'/>
				</div>
			</div>
        {open ? dropdownSelections() : null}
		</div>
      </div>
    </div>
  );
};

export function ErrorBoundary({ error }:any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-red-500">
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}

export default Dropdown;
