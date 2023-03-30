Hey guys,

I tried the example here.

But I get an error

`
Server Error
TypeError: Cannot read properties of undefined (reading 'icon')

This error happened while generating the page. Any console logs will be displayed in the terminal window.
`
I Console logged but it is undefined.

`Do we have to install a plugin like`remark`or`gray-matter` etc?

## Issue 2

In my case, I tried a workaround since mine would not be coming from a DB.
I directly rendered a svg component inside the `sidebar`. Works.

with a little inline css it looks like this 👇

...image

Is there anyway I can skip the parents to inherit this checklist? Something like negating grandparents and parents but only allow child items to have the icons? Or maybe a new feature?
