'use client';

import { useRef, useState } from 'react';
import { debounce } from 'lodash';
import sigilString from '@/utils/sigil-string';

export default function FormSigil() {
  const [value, setValue] = useState('');

  // debounce & ref to improve perf
  const debouncedValue = useRef(
    debounce((value: string) => {
      setValue(value);
    }, 300),
  );

  return (
    <>
      <div className="flex flex-col w-full px-4">
        <div>
          <h2 className="text-sm font-bold">Statement of desire</h2>
          <textarea
            className="w-full my-2 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            onChange={(el) => {
              debouncedValue.current(
                // send to sigilify and force change to lowercase
                sigilString(el.target.value.toLowerCase()),
              );
            }}
          ></textarea>
        </div>
        <div>
          <h2 className="text-sm font-bold">Output char</h2>
          <textarea className="w-full my-2" value={value} readOnly disabled />
        </div>
      </div>
    </>
  );
}
