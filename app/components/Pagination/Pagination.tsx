"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination(props: {
  count: number;
  next: string | null;
  previous: string | null;
  isLoading?: boolean;
  onNavigate?: (url: string) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentOffset = parseInt(searchParams.get("offset") || "0");
  const limit = parseInt(searchParams.get("limit") || "50");

  const totalPages = Math.ceil(props.count / limit);
  const currentPage = Math.floor(currentOffset / limit) + 1;
  const isLoading = props.isLoading || false;

  const navigate = (offset: number) => {
    const url = `/?offset=${offset}&limit=${limit}`;
    if (props.onNavigate) {
      props.onNavigate(url);
    } else {
      router.push(url);
    }
  };

  const goToPage = (page: number) => {
    const offset = (page - 1) * limit;
    navigate(offset);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-12 mb-8">
      {/* Informação da página */}
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        Página <span className="text-blue-600 dark:text-blue-400 font-bold">{currentPage}</span> de{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold">{totalPages}</span>
      </div>

      {/* Botões de navegação */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Primeira página */}
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1 || isLoading}
          className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:scale-110 disabled:hover:scale-100 flex items-center justify-center"
          title="Primeira página"
        >
          {isLoading ? "⏳" : "⏮️"}
        </button>

        {/* Página anterior */}
        <button
          onClick={() => props.previous && navigate(currentOffset - limit)}
          disabled={!props.previous || isLoading}
          className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:scale-110 disabled:hover:scale-100 flex items-center justify-center"
          title="Página anterior"
        >
          {isLoading ? "⏳" : "◀️"}
        </button>

        {/* Páginas próximas */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => {
            const pageNum = currentPage - 2 + i;
            if (pageNum < 1 || pageNum > totalPages) return null;

            const isCurrentPage = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                disabled={isLoading}
                className={`w-10 h-10 rounded-lg font-bold shadow-md transition-all duration-200 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 ${
                  isCurrentPage
                    ? "bg-gradient-to-br from-pink-500 to-rose-500 text-white scale-110 shadow-lg"
                    : "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-br hover:from-pink-400 hover:to-rose-400 hover:text-white"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Próxima página */}
        <button
          onClick={() => props.next && navigate(currentOffset + limit)}
          disabled={!props.next || isLoading}
          className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:scale-110 disabled:hover:scale-100 flex items-center justify-center"
          title="Próxima página"
        >
          {isLoading ? "⏳" : "▶️"}
        </button>

        {/* Última página */}
        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages || isLoading}
          className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:scale-110 disabled:hover:scale-100 flex items-center justify-center"
          title="Última página"
        >
          {isLoading ? "⏳" : "⏭️"}
        </button>
      </div>
    </div>
  );
}