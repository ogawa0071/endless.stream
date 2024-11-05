import { Archive } from "@/components/archive";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Archive />
        </div>
      </div>
    </div>
  );
}
