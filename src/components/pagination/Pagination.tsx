import { usePagination } from "../../hooks/usePagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./pagination.css";

type PaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  page: currentPage, // current page
  setPage: onPageChange,
}: PaginationProps) => {
  const paginationRange =
    usePagination({
      totalCount,
      pageSize,
      siblingCount,
      currentPage,
    }) || [];

  if (currentPage === 1 || paginationRange.length < 2) return null;

  const nextPage = () => {
    onPageChange((prev) => prev + 1);
  };

  const previousPage = () => {
    onPageChange((prev) => prev - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      <li
        onClick={nextPage}
        className={`pagination-item  ${currentPage === 1 && "disable-btn"}`}
      >
        <MdKeyboardArrowLeft />
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "...")
          return (
            <li key={`${index}-dot`} className="pagination-dots">
              &#8230;
            </li>
          );
        else
          return (
            <li
              key={pageNumber}
              onClick={() => onPageChange(pageNumber as number)}
              className={`pagination-item  ${
                currentPage === pageNumber
              } && "select-btn"`}
            >
              {pageNumber}
            </li>
          );
      })}

      <li
        onClick={previousPage}
        className={`pagination-item   ${
          currentPage === lastPage && "disable-btn"
        }`}
      >
        <MdKeyboardArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
