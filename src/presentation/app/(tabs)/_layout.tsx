import { TabBar } from "@components/TabBar/view";
import { homeTabButtons } from "presentation/constants/homeTabButtons";

export default function TabLayout() {
  return <TabBar tabButtons={homeTabButtons} />;
}
