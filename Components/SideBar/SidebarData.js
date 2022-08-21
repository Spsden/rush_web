import {
  Home,
  Globe,
  Tag,
  MessageCircle,
  PlayCircle,
  ShoppingCart,
  DownloadCloud,
} from "react-feather";

export const SidebarData = [
  {
    title: "Home",
    icon: <Home />,
    link: "/home",
  },
  {
    title: "Web Browsers",
    icon: <Globe />,
    link: "/appCatPage",
  },

  {
    title: "Social Media",
    icon: <Tag />,
    link: "/socialmedia",
  },
  {
    title: "Messaging",
    icon: <MessageCircle />,
    link: "/messeging",
  },
  {
    title: "Media & Entertainment",
    icon: <PlayCircle />,
    link: "/media",
  },
  {
    title: "Shopping",
    icon: <ShoppingCart />,
    link: "/shopping",
  },
  {
    title: "Documents",
    icon: <DownloadCloud />,
    link: "/documents",
  },
];
