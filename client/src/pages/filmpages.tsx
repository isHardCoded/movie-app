import { Link, useParams } from "react-router-dom"

export function FilmPage() {
  const { id } = useParams()

  return (
    <div className="p-10">
      <Link to="/" className="text black 600 ">
         Назад 
      </Link>

      <h1 className="text-3xl font-bold mt-6">
        ID : {id}
      </h1>
    </div>
  )
}
