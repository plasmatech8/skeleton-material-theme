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

The default color of the ripple is set to the text color (in the postcss file).

## Theme files

The theme for this app is configured in two files:

* [material.ts](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/material.ts) &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa-solid fa-left-long"></i> the main theme file
* [app.postcss](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/app.postcss) &nbsp; <i class="fa-solid fa-left-long"></i> contains some extra styles & CSS corrections
