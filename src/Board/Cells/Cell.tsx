import { CellDataProps } from "./cells";
import './cell.scss'

interface CellProps {
    index: number,
    cell: CellDataProps,
    player: string,
}

export const Cell = ({index, cell, player}: CellProps) => {
    return (
        <div key={index} className='cell'>
            <span className={'header ' + cell.value } >{cell.name}</span>
            <span>{ player ? ' Player: ' + player : ' (no player here)' }</span>
        </div>
    );
}