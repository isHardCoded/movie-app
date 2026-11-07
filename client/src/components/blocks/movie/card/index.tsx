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
  posterUrl: string | undefined
}

export const MovieCard = ({ title, description, posterUrl }: MovieCardProps) => {
  return (
    <Card className="relative w-100 pt-0">
      <img
        src={posterUrl}
        alt="Event cover"
        className="relative w-full aspect-video object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
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
