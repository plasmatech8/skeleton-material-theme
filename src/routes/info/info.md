# Info

This application was built using Svelte, Skeleton and Tailwind.

See the [GitHub repo](https://github.com/plasmatech8/skeleton-material-theme) for more information.

## Ripple

For the ripple-effect, the [svelte-ripple-action](https://github.com/Posandu/svelte-ripple-action) NPM package was installed.

To add the Ripple effect to a button or anchor tag, you can use the svelte action.

e.g.

```ts
<button class="btn variant-filled-primary" use:ripple>primary</button>
```

The default color of the ripple is set to the text color with 28% opacity.

## Theme files

The theme for this app is configured in two files:

* [material.ts](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/material.ts) &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa-solid fa-left-long"></i> the main theme file
* [app.postcss](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/app.postcss) &nbsp; <i class="fa-solid fa-left-long"></i> contains some extra styles & CSS corrections


## Caveat

The ripple effect cannot be added to child elements of pre-built components because these elements (i.e. buttons) are not exposed to the developer and "use:ripple" cannot be added.

Pre-built components such modals, paginators and steppers - will not have the ripple effect added unless you [configure JavaScript to add ripple effects automatically/globally](https://github.com/plasmatech8/skeleton-material-theme/tree/main#automatic-global-ripple-effect).
