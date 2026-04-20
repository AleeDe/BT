import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Database,
  Heart,
  RefreshCw,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { HeroIconKey } from "./content";

// Central icon registry so card icon keys resolve from content config.
export const heroIconMap: Record<HeroIconKey, LucideIcon> = {
  users: Users,
  database: Database,
  refreshCw: RefreshCw,
  heart: Heart,
  target: Target,
  trendingUp: TrendingUp,
  star: Star,
  alertTriangle: AlertTriangle,
  cpu: Cpu,
  trophy: Trophy,
  checkCircle2: CheckCircle2,
};
