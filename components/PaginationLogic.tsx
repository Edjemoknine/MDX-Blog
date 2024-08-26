"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationProps {
  totalPages: number;
  className?: string;
}

const PaginationLogic = ({ totalPages, className }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const PreviousPage = currentPage - 1;
  const NextPage = currentPage + 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {PreviousPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={handlePageChange(PreviousPage)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`btn-${index + 1}`}
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {NextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={handlePageChange(NextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationLogic;
