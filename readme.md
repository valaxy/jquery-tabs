> This component is aiming at rapid development of prototype, API may not be stable

- If there is at least one tab, then always has a tab active
- Can only has one tab active all the time

# DOM Manipulate
- `new Tab()` 
- `$dom` root element of tabs
- `length` how many tabs
- `active($tab)` active the $tab
- `add($tab, [index])` append tab or at position of `index`, `$tab` must be `<tab>`
- `removeAt(index)` remove at position of `index`
- `getAt(index)` get $tab at position of `index`
- `getActive()` get the $tab of active

# CSS Selector
- `tabs` the root element
- `tabs > tab[active]` tab is active
- `tabs > tab:not([active])` tab is inactive
- `tabs > tab:nth-of-type(n)` n-th tab
- and so on