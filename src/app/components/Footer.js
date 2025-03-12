import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-background py-2 x-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-row justify-center">
        <div className="flex items-center justify-center text-sm">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            HarryAhnHS
          </a>
          .
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full"
          >
            <a
              href="https://github.com/HarryAhnHS/playai-pdf-reader"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer