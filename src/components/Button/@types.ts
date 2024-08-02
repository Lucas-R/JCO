export interface ButtonProps {
    type: "outline" | "primary";
    color?: string;
    children: React.ReactNode | React.ReactNode[] | string;
    className?: string;
    fn?: () => void;
}