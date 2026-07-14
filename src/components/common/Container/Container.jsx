import clsx from "clsx";

const Container = ({
  children,
  className = "",
  fluid = false,
}) => {
  return (
    <div
      className={clsx(
        fluid
          ? "w-full px-4 sm:px-6 lg:px-8"
          : "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;