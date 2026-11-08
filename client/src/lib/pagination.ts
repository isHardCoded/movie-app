export type PageItem = number | 'ellipsis-left' | 'ellipsis-right'

function range(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i)
}

export function getPageRange(currentPage: number, totalPages: number, siblings: number = 1) {
  const totalSlots = siblings * 2 + 5

  if (totalPages <= totalSlots) {
    return range(1, totalPages)
  }

  const leftSibling = Math.max(currentPage - siblings, 1)
  const rightSibling = Math.min(currentPage + siblings, totalPages)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < totalPages - 1

  if (!showLeftDots && showRightDots) {
    const leftCount = 3 + 2 * siblings
    return [...range(1, leftCount), 'ellipsis-right', totalPages]
  }

  if (showLeftDots && !showRightDots) {
    const rightCount = 3 + 2 * siblings
    return [1, 'ellipsis-left', ...range(totalPages - rightCount + 1, totalPages)]
  }

  return [
    1,
    'ellipsis-left',
    ...range(leftSibling, rightSibling),
    'ellipsis-right',
    totalPages
  ]
}