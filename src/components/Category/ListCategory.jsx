import React, { useEffect, useState } from "react";
import { dataCards } from "../../Data";
import { CategoryCards } from "./CategoryCards";
import style from "./Category.module.css";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

export const ListCategory = (props) => {
  const { nameFilter } = props;
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);

  let currentItems;
  let pageCount;
  

  function filtracion(filtro) {
    if (filtro == "all") {
      currentItems = dataCards.slice(itemOffset, endOffset);
      pageCount = Math.ceil(Object.values(dataCards).length / itemsPerPage);
    } else {
      let res = [];
      dataCards.map((lista) => {
        if (lista.filter == filtro) {
          res.push(lista);
        }
      });
      currentItems = res.slice(itemOffset, endOffset);
      pageCount = Math.ceil(Object.values(res).length / itemsPerPage);
    }
  }
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  if (nameFilter == "all") {
    filtracion("all");
  } else if (nameFilter == "wedding") {
    filtracion("wedding");
  } else if (nameFilter== "fifteenYears") {
    filtracion("fifteenYears");
  }else if (nameFilter == "degrees") {
    filtracion("degrees");
  }else if (nameFilter == "babyShower") {
    filtracion("babyShower");
  }else if (nameFilter == "birthday") {
    filtracion("birthday");
  }else if (nameFilter == "baptisms") {
    filtracion("baptisms");
  }else {
    filtracion("firstCommunions");
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % Object.values(dataCards).length;
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
};
