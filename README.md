# Firefox extension to give a live word-count in a specific line range
This extension gives a live word-count within a predetermined range in the Overleaf document.

This is done by adding "%START-COUNT" and "%END-COUNT" to determine the range. Then, add a "%WORD-COUNT" which gives the word count in the line below
```latex
%START-COUNT
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
%END-COUNT

%WORD-COUNT
Word count: 69
```
