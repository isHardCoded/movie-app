import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface MovieCardProps {
  title: string | undefined,
  description: string | undefined,
  posterUrlPreview: string | undefined
}

export const MovieCard = ({ title, description, posterUrlPreview }: MovieCardProps) => {
  return (
    <Card className="relative w-70 pt-0">
      <img
        src={posterUrlPreview}
        alt="Event cover"
        className="relative w-full h-90 aspect-video object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription className="truncate">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Watch</Button>
      </CardFooter>
    </Card>
  )
}
