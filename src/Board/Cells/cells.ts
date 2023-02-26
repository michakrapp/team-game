export interface CellDataProps {
    'id': number,
    'name': string,
    'value': string,
}

const cellStart:CellDataProps = {
    'id': 0,
    'name': 'Start',
    'value': 'start'
}

const cellSpecial:CellDataProps = {
    'id': 1,
    'name': 'Special',
    'value': 'special'
}

const cellRed:CellDataProps = {
    'id': 2,
    'name': 'Red',
    'value': 'red',
}

const cellBlue:CellDataProps = {
    'id': 3,
    'name': 'Blue',
    'value': 'blue',
}

const cellGreen:CellDataProps = {
    'id': 4,
    'name': 'Green',
    'value': 'green',
}

export const cellsData = [
    cellStart,
    cellSpecial,
    cellRed,
    cellBlue,
    cellGreen,

    cellSpecial,
    cellRed,
    cellBlue,
    cellGreen,
    cellRed,
    cellBlue,
    cellGreen,

    /*
    cellSpecial,
    cellRed,
    cellBlue,
    cellGreen,

    cellSpecial,
    cellRed,
    cellBlue,
    cellGreen,
    cellRed,
    cellBlue,
    cellGreen,
    */
];