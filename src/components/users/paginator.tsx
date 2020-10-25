import style from "./paginator.module.css";
import React, {useState} from "react";
import cn from "classnames";

type Props = {
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize: number
}

export const Paginator = (props: Props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;
    return (
            <div className={style.paginator}>
                {portionNumber > 1 &&
                <span className={style.portionNumberLeft} onClick={() => {setPortionNumber(portionNumber -1)}}>{"<"}</span>
                }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={ cn({ [style.selectedPage]:
                            props.currentPage === p}, style.pageNumber) }
                                    key={p}
                                    onClick={(e) => {
                                        props.onPageChanged(p);
                                    }}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                <span className={style.portionNumberRight} onClick={() => {setPortionNumber(portionNumber + 1)}}>{">"}</span>
                }
        </div>
    )
};