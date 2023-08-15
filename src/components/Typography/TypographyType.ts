export interface TypographyType extends React.ComponentPropsWithoutRef<"p"> {
  className?: string;
  children: React.ReactNode;
  variant: "head" | "subhead" | "body" | "subbody";
  mode?: "light" | "dark";
}