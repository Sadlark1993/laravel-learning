import { ComponentProps, ReactNode } from 'react';

interface NavLinkProps extends ComponentProps<'a'> {
  current: boolean;
  children: ReactNode;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavLink({ children, current = false, ...props }: NavLinkProps) {
  return (
    <a
      {...props}
      className={classNames(
        current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium',
      )}
    >
      {children}
    </a>
  );
}
