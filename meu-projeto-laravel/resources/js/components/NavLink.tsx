interface NavLinkProps {
    label: string;
    ref: string;
}

export default function NavLink({ label, ref }: NavLinkProps) {
    return <a href={ref}>{label}</a>;
}
