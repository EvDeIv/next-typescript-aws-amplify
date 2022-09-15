import { routers } from "@src/config/routers";

export interface TCollapseItem {
  name: string;
  href: string;
}

export const categories = [
  { name: "Used Car", href: routers.default() },
  { name: "Complete/CKD", href: routers.default() },
  { name: "Engine", href: routers.default() },
  { name: "Others", href: routers.default() },
];

export const model = [
  { name: "TOYOTA", href: routers.default() },
  { name: "NISSAN", href: routers.default() },
  { name: "HONDA", href: routers.default() },
  { name: "MITSUBISHI", href: routers.default() },
  { name: "MAZDA", href: routers.default() },
  { name: "SUBARU", href: routers.default() },
  { name: "SUZUKI", href: routers.default() },
  { name: "DAIHATSU", href: routers.default() },
];

export const contact = [
  { name: "How To Buy", href: routers.default() },
  { name: "Benefits of Sign Up", href: routers.default() },
  { name: "FAQ", href: routers.default() },
  { name: "Articles", href: routers.default() },
];

export const about = [
  { name: "Who we are", href: routers.default() },
  { name: "Privacy Policies", href: routers.default() },
  { name: "Terms and Conditions", href: routers.default() },
];
