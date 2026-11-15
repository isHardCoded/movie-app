import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface MovieCardProps {
  title?: string
  description?: string
  posterUrlPreview?: string
  ratingKinopoisk?: number
}

export const MovieCard = ({
  title,
  description,
  posterUrlPreview,
  ratingKinopoisk,
}: MovieCardProps) => {
  return (
    <Card className="relative hover:shadow-lg transition-all hover:scale-102 w-72 pt-0 cursor-pointer">
      <img
        src={posterUrlPreview}
        alt={title || "Event cover"}
        className="relative w-full h-96 object-cover"
      />
      <CardHeader>
        {ratingKinopoisk &&(
          <CardAction>
          <Badge variant="secondary">{ratingKinopoisk ?? "—"}</Badge>
        </CardAction>
        )}
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription className="truncate">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
