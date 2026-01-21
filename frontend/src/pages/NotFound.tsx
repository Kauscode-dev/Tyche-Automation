import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="section-container flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="font-heading text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link to="/">
          <Button variant="gradient" size="lg">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
