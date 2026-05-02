/* ----------------------------------------------------------------- */
/* --------------------------- CONSTANTS --------------------------- */
/* ----------------------------------------------------------------- */
const BOARD_LIGHT = "#eec39a";
const BOARD_DARK = "#df7126";

const PIECE_COLORS_LIGHT = ["#0000", "#000F", "#FFFF"];
const PIECE_COLORS_DARK = ["#0000", "#FFFF", "#000F"];

// pixel constants
const _ = 0
const O = 1
const P = 2

const P_BLANK        = 0b0000;  // 0

const P_PAWN_WHITE   = 0b0001;  // 1
const P_ROOK_WHITE   = 0b0010;  // 2
const P_KNIGHT_WHITE = 0b0011;  // 3
const P_BISHOP_WHITE = 0b0100;  // 4
const P_QUEEN_WHITE  = 0b0101;  // 5
const P_KING_WHITE   = 0b0110;  // 6

const P_PAWN_BLACK   = 0b1001;  // 9
const P_ROOK_BLACK   = 0b1010;  // 10
const P_KNIGHT_BLACK = 0b1011;  // 11
const P_BISHOP_BLACK = 0b1100;  // 12
const P_QUEEN_BLACK  = 0b1101;  // 13
const P_KING_BLACK   = 0b1110;  // 14


const GRAPHICS = {

    0: new Uint8Array(64),
    1: new Uint8Array([
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, O, O, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, O, _, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, O, _, _, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, O, _, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, _, O, O, O, O, O, O, O, O, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
    ]),
    2: new Uint8Array([
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, O, O, O, _, O, O, _, O, O, O, _, _, _, 
        _, _, _, O, P, P, O, P, P, O, P, P, O, _, _, _, 
        _, _, _, O, P, P, O, P, P, O, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, O, O, O, O, O, O, O, O, O, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
    ]),
    3: new Uint8Array([
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, O, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, O, P, O, _, _, _, _, _, 
        _, _, _, _, _, _, O, O, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, O, P, O, P, P, P, P, O, _, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, _, 
        _, O, P, P, P, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, O, P, P, P, O, P, P, P, P, O, _, _, _, _, 
        _, _, _, O, P, O, O, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, O, O, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, _, O, O, O, O, O, O, O, O, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
    ]),
    4: new Uint8Array([
        _, _, _, _, _, _, _, O, O, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, O, _, _, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, O, _, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, O, P, P, P, O, P, P, O, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, O, _, _, _, _, _, _, 
        _, _, _, _, _, O, P, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, O, P, P, P, P, P, P, O, _, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, _, O, O, O, O, O, O, O, O, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
    ]),
    5: new Uint8Array([
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _, 
        _, O, O, _, O, P, P, O, O, P, P, O, _, O, O, _, 
        O, P, P, O, O, P, P, O, O, P, P, O, O, P, P, O, 
        O, P, P, O, _, O, P, O, O, P, O, _, O, P, P, O, 
        _, O, P, P, O, O, P, P, P, P, O, O, P, P, O, _, 
        _, O, P, P, O, O, P, P, P, P, O, O, P, P, O, _, 
        _, _, O, P, P, O, P, P, P, P, O, P, P, O, _, _, 
        _, _, O, P, P, O, O, P, P, O, O, P, P, O, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, O, _, _, _, 
        _, _, _, _, O, O, O, O, O, O, O, O, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,         
    ]),
    6: new Uint8Array([
        _, _, _, _, _, _, _, _, O, _, _, _, _, _, _, _, 
        _, _, _, _, _, _, _, O, P, O, _, _, _, _, _, _, 
        _, _, _, _, _, _, O, P, P, P, O, _, _, _, _, _, 
        _, _, _, _, _, O, O, O, P, O, O, O, _, _, _, _, 
        _, _, O, O, O, P, P, O, P, O, P, P, O, O, O, _, 
        _, O, P, P, P, O, O, P, P, P, O, O, P, P, P, O, 
        _, O, P, P, P, P, O, O, P, O, O, P, P, P, P, O, 
        _, O, P, P, P, P, P, P, P, P, P, P, P, P, P, O, 
        _, O, P, P, P, O, P, P, P, P, P, O, P, P, P, O, 
        _, O, P, P, P, O, O, P, P, P, O, O, P, P, P, O, 
        _, O, P, P, P, P, O, P, P, P, O, P, P, P, P, O, 
        _, _, O, P, P, P, P, P, P, P, P, P, P, P, O, _, 
        _, _, _, O, P, P, P, P, P, P, P, P, P, O, _, _, 
        _, _, _, _, O, P, P, O, O, O, P, P, O, _, _, _, 
        _, _, _, _, _, O, O, _, _, _, O, O, _, _, _, _, 
        _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,         
    ]),
}

/* ----------------------------------------------------------------- */
/* --------------------------- MEMORY   ---------------------------- */
/* ----------------------------------------------------------------- */
const board = new Uint8Array(64);

/* ----------------------------------------------------------------- */
/* --------------------------- GRAPHICS ---------------------------- */
/* ----------------------------------------------------------------- */
let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
canvas.width = 128;
canvas.height = 128;

function draw_background()
{
    for (let x=0; x<128; x+=16)
    {
        for (let y=0; y<128; y+=16)
        {
            ctx.fillStyle = (x+y)%32==0 ? BOARD_LIGHT : BOARD_DARK;
            ctx.fillRect(x, y, 16, 16);
        }
    }
}

function draw_graphic(graphic, x, y, colors)
{
    for (let i=0; i<256; i++)
    {
        ctx.fillStyle = colors[graphic[i]];
        ctx.fillRect(x+i%16, y+~~(i/16), 1, 1)
    }
}

function reset_board()
{
    for (let i=0; i<64; i++)
        board[i] = [
            P_ROOK_WHITE, P_KNIGHT_WHITE, P_BISHOP_WHITE, P_KING_WHITE, P_QUEEN_WHITE, P_BISHOP_WHITE, P_KNIGHT_WHITE, P_ROOK_WHITE,
            P_PAWN_WHITE, P_PAWN_WHITE, P_PAWN_WHITE, P_PAWN_WHITE, P_PAWN_WHITE, P_PAWN_WHITE, P_PAWN_WHITE, P_PAWN_WHITE,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            P_PAWN_BLACK, P_PAWN_BLACK, P_PAWN_BLACK, P_PAWN_BLACK, P_PAWN_BLACK, P_PAWN_BLACK, P_PAWN_BLACK, P_PAWN_BLACK,
            P_ROOK_BLACK, P_KNIGHT_BLACK, P_BISHOP_BLACK, P_KING_BLACK, P_QUEEN_BLACK, P_BISHOP_BLACK, P_KNIGHT_BLACK, P_ROOK_BLACK,
        ][i];
}

function draw_board()
{
    draw_background()

    // draw the pieces
    for (let i=0; i<64; i++)
    {
        draw_graphic(GRAPHICS[board[i] & 0b0111], 16*(i%8), 16*~~(i/8), board[i] >> 3 ? PIECE_COLORS_DARK: PIECE_COLORS_LIGHT);
    }
}

function draw_overlays()
{
    if (first_click != undefined)
    {
        ctx.fillStyle = "#FF07";
        ctx.fillRect(16*(first_click%8), 16*~~(first_click/8), 16, 16);
    }
}

reset_board()
draw_board()

function redraw()
{
    draw_board()
    draw_overlays()
}

let first_click;

function tap_handler(event)
{
    const canvas_display_width = canvas.getClientRects()[0].width - 2; // remove border
    const canvas_display_height = canvas.getClientRects()[0].height - 2; // remove border

    // ignore border clicks
    if (event.offsetX < 1 || event.offsetX > canvas_display_width-1) return;
    if (event.offsetY < 1 || event.offsetY > canvas_display_height-1) return;

    const selected_x = ~~((event.offsetX-1)/canvas_display_width * 8);
    const selected_y = ~~((event.offsetY-1)/canvas_display_height * 8);

    const selected_i = selected_y*8 + selected_x;

    if (first_click == undefined)
    {
        first_click = selected_i;
    }
    else
    {
        const different_colors = (board[first_click] >> 3 ^ board[selected_i] >> 3);
        if (board[first_click] != P_BLANK && different_colors)
        {
            board[selected_i] = board[first_click];
            board[first_click] = P_BLANK;
        }
        first_click = undefined;
    }

    redraw();
}

document.body.addEventListener("mousedown", tap_handler);
document.body.addEventListener("touchdown", tap_handler);
