
export interface ButtonType extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button" | "reset"
  variant: "blue" | "gray"
}