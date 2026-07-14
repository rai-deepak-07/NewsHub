import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

import Input from "../../common/Input/Input";

const SearchBar = ({
  initialValue = "",
  placeholder = "Search news, topics, sources...",
  autoFocus = false,
  onSearch,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmed = value.trim();

    if (!trimmed) return;

    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        icon={Search}
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        trailing={
          value && (
            <button
              type="button"
              onClick={() => setValue("")}
              className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )
        }
      />
    </form>
  );
};

export default SearchBar;
