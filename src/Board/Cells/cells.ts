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
    'name': 'Special (1)',
    'value': 'special'
}

const cellRed:CellDataProps = {
    'id': 2,
    'name': 'Red (2)',
    'value': 'red',
}

const cellBlue:CellDataProps = {
    'id': 3,
    'name': 'Blue (3)',
    'value': 'blue',
}

const cellGreen:CellDataProps = {
    'id': 4,
    'name': 'Green (4)',
    'value': 'green',
}

export const cellsData = [
    cellStart,
    
    cellRed,
    cellBlue,
    cellGreen,

    cellSpecial,
    
    cellRed,
    cellBlue,
    cellGreen,
    
    cellSpecial,

    cellRed,
    cellBlue,
    cellGreen,
];