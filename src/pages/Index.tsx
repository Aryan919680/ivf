
import { Navigation } from "@/components/Navigation";
import { LogBookForm } from "@/components/LogBookForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <LogBookForm />
      </main>
      <footer className="bg-white border-t mt-16 py-4 text-center text-gray-600">
        © 2025 LogHub. By Webiosis. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
