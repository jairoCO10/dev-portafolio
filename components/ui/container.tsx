interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={`container mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
}