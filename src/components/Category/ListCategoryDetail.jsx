import React, { useEffect, useState } from "react";
import { dataDetail } from '../../Data';
import { CategoryCards } from './CategoryCards';
import style from './Category.module.css'
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";


export const ListCategoryDetail = (props) => {
  const { nameFilter } = props;
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);

  let currentItems;
  let pageCount;
  

  function filtracion(filtro) {
    if (filtro == "all") {
      currentItems = dataDetail.slice(itemOffset, endOffset);
      pageCount = Math.ceil(Object.values(dataDetail).length / itemsPerPage);
    } else {
      let res = [];
      dataDetail.map((lista) => {
        if (lista.filter == filtro) {
          res.push(lista);
        }
      });
      currentItems = res.slice(itemOffset, endOffset);
      pageCount = Math.ceil(Object.values(res).length / itemsPerPage);
    }
  }
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  if (nameFilter == "all") {
    filtracion("all");
  } else if (nameFilter == "detail") {
    filtracion("detail");
  } else{
    filtracion("boxesAndPackaging");
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % Object.values(dataDetail).length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <section className={style.sectioncontainerCards}>
      <div className={style.containerCards}>
        {}
        {currentItems.map((lista) => {
          return (
            <div key={lista.id}>
              <CategoryCards lista={lista} />
            </div>
          );
        })}
      </div>
      {
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      }
    </section>
  );
}
