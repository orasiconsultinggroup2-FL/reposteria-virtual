import { useState } from "react";
import DashboardView from "./views/DashboardView";
import ModulesView from "./views/ModulesView";
import RecipeDetailView from "./views/RecipeDetailView";
import ToolsView from "./views/ToolsView";
import ProfileView from "./views/ProfileView";
import Header from "./components/Layout/Header";
import BottomNav from "./components/Layout/BottomNav";

export default function App() {
  const [view, setView] = useState("dashboard");
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <DashboardView onSelectRecipe={(id) => {
          setSelectedRecipe(id);
          setView("recipe");
        }} />;
      case "modules":
        return <ModulesView />;
      case "recipe":
        return (
          <RecipeDetailView
            recipeId={selectedRecipe}
            onBack={() => setView("dashboard")}
          />
        );
      case "tools":
        return <ToolsView />;
      case "profile":
        return <ProfileView />;
      default:
        return <DashboardView onSelectRecipe={() => {}} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">{renderView()}</main>
      <BottomNav onNavigate={setView} />
    </div>
  );
}
