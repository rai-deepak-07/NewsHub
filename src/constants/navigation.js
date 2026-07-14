import {
  House,
  Flame,
  Search,
  Bookmark,
  Menu,
} from "lucide-react";

const NAVIGATION = [
  {
    label: "Home",
    path: "/",
    icon: House,
  },
  {
    label: "Latest",
    path: "/latest",
    icon: Flame,
  },
  {
    label: "Search",
    path: "/search",
    icon: Search,
  },
  {
    label: "Saved",
    path: "/bookmarks",
    icon: Bookmark,
  },
  {
    label: "Menu",
    path: "#",
    icon: Menu,
  },
];

export default NAVIGATION;