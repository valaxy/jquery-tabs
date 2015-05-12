- If there is at least one tab, then always has a tab active
- Can only has one tab active all the time

# DOM Manipulate
- `new Tab()` 
- `$dom` root element of tabs
- `length` how many tabs
- `active($tab)` active the $tab
- `add(content, [index])` append tab or at position of `index`
- `removeAt(index)` remove at position of `index`
- `getAt(index)` get $tab at position of `index`
- `getActive()` get the $tab of active

# CSS Selector
- `[active]` tab is active
- `:not([active])` tab is inactive
- `:nth-of-type(n)` n-th tab
- and so on