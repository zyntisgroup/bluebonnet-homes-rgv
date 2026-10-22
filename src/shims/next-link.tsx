import React from "react";
import { navigateTo } from "./next-navigation";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, onClick, children, target, ...rest }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (
        e.defaultPrevented ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        target === "_blank" ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.endsWith(".pdf")
      ) {
        return;
      }
      e.preventDefault();
      navigateTo(href);
    };

    return (
      <a ref={ref} href={href} target={target} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
export default Link;
