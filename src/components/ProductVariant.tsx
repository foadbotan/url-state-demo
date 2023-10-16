import { cn } from '@/lib/cn';
import React from 'react';

export default function ProductVariant({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <p>
        <span className="mr-3 text-3xl font-semibold">{label}:</span>
        <span className="text-3xl font-light capitalize">{value}</span>
      </p>
      <div className="space-x-4">{children}</div>
    </div>
  );
}
