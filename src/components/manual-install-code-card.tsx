import { CodeIcon } from "lucide-react"
import { useState, type ReactNode } from "react"

import { CSSIcon } from "@/components/icons/css-icon"
import { TypeScriptIcon } from "@/components/icons/typescript-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { cn } from "@/lib/utils"

export function ManualInstallCodeCard({
  filePath,
  children,
}: {
  filePath: string
  children: ReactNode
}) {
  const Icon = getIcon(filePath)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="not-content overflow-hidden bg-code p-0">
      <CardContent className="p-0">
        <div className="flex items-center border-b border-input px-3 py-1">
          <Icon className="mr-2 size-4 text-muted-foreground" />
          <div className="font-mono text-muted-foreground">{filePath}</div>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto text-muted-foreground"
            onClick={() => setIsExpanded(e => !e)}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>
        <div
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            !isExpanded && "max-h-52",
          )}
        >
          {children}
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-code via-code/70 via-70% to-transparent text-sm text-muted-foreground"
            >
              Expand
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function getIcon(filePath: string) {
  if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
    return TypeScriptIcon
  }
  if (filePath.endsWith(".css")) {
    return CSSIcon
  }
  return CodeIcon
}
