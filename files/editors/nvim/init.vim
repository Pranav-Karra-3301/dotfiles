" General settings
set nocompatible            " disable compatibility to old-time vi
set showmatch               " show matching brackets
set ignorecase              " case insensitive matching
set smartcase               " override ignorecase if search pattern has upper case
set mouse=a                 " enable mouse for all modes
set hlsearch                " highlight search results
set incsearch               " incremental search
set autoindent              " indent a new line the same amount as the line just typed
set number                  " add line numbers
set relativenumber          " show relative line numbers
set wildmode=longest,list   " get bash-like tab completions
set cc=88                   " set colour column for good coding style
set tabstop=4               " number of columns occupied by a tab character
set expandtab               " convert tabs to white space
set shiftwidth=4            " width for autoindents
set softtabstop=4           " see multiple spaces as tabstops so <BS> does the right thing

" Enable filetype detection and plugin/indent info
filetype plugin indent on

" Plugin management
call plug#begin()
Plug 'vim-airline/vim-airline'
Plug 'jiangmiao/auto-pairs'
Plug 'tpope/vim-surround'
Plug 'preservim/nerdcommenter'
Plug 'https://github.com/github/copilot.vim.git'
Plug 'preservim/nerdtree'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'morhetz/gruvbox'
Plug 'ryanoasis/vim-devicons'
Plug 'cormacrelf/vim-colors-github'
Plug 'jiangmiao/auto-pairs'
Plug 'tpope/vim-commentary'
Plug 'Yggdroot/indentLine'
call plug#end()

" Set runtime path and source .vimrc
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
if filereadable(expand("~/.vimrc"))
    source ~/.vimrc
endif


" Start NERDTree and put the cursor back in the other window
autocmd VimEnter * NERDTree | wincmd p

" Exit Vim if NERDTree is the only window remaining in the only tab
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif

" Toggle NERDTree with Ctrl+n
nnoremap <C-n> :NERDTreeToggle<CR>

" FZF settings
nnoremap <C-p> :Files<CR>

" Set colorscheme
colorscheme github


" Use Ctrl+h and Ctrl+l to cycle through buffers
nnoremap <C-h> :bprevious<CR>
nnoremap <C-l> :bnext<CR>
