export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-secondary/60">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

