import { MouseEventHandler } from "react";

interface ItemsProps {
  title: string;
  description: string;
  hasDivider: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}

export const SearchItem = ({
  title = "",
  description = "",
  hasDivider = true,
  onClick,
  isActive = false,
}: ItemsProps) => {
  return (
    <div
      className={`item`}
      onClick={onClick}
      style={{
        zIndex: isActive ? 2 : 0,
      }}
    >
      {!isActive && hasDivider && <hr className="divider" />}
      <div className={`search-item ${isActive ? "no-hover" : ""}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
