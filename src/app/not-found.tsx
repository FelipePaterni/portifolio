import Button from "@/components/ui/button";
import { NavLink } from "@/components/ui/navlink";
import { Link2Off } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="flex flex-row items-center justify-center gap-5 mb-5">
          <Link2Off className="h-9 w-9" />
          <h1 className="text-4xl font-bold ">404 - Página não encontrada</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          A página que você está procurando não existe.
        </p>
        <NavLink href="/">
          <Button>Voltar para Home</Button>
        </NavLink>
      </div>
    </div>
  );
}
