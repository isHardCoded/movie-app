import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getPageRange } from "@/lib/pagination"

interface MoviesPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function MoviesPagination({ currentPage, totalPages, onPageChange }: MoviesPaginationProps) {
  if (totalPages <= 1) return null

  const go = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault()

    if (page === currentPage || page < 1 || page > totalPages) return
    onPageChange(page)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={go(currentPage - 1)} />
        </PaginationItem>

        {getPageRange(currentPage, totalPages).map((item) => (
          typeof item === 'number' ? (
            <PaginationItem key={item}>
            <PaginationLink 
              href="#" 
              isActive={item === currentPage}
              onClick={go(item)}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationEllipsis />
            </PaginationItem>
          )
        ))}

        <PaginationItem>
          <PaginationNext href="#" onClick={go(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}