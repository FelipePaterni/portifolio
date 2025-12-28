export default function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
