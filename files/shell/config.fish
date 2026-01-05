
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
if test -f /Users/pranavkarra/anaconda3/bin/conda
    eval /Users/pranavkarra/anaconda3/bin/conda "shell.fish" "hook" $argv | source
end
# <<< conda initialize <<<


string match -q "$TERM_PROGRAM" "kiro" and . (kiro --locate-shell-integration-path fish)
