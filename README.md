# Skeleton Material Theme

This is a demo attempt to create a Material-like theme using [SvelteKit](https://kit.svelte.dev/)
and [Skeleton](https://www.skeleton.dev/) UI.

![Alt text](./docs/home.png)

## Theme

### Configuration

The theme is configured in two files:

* [material.ts](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/material.ts) &nbsp;&nbsp;&nbsp;&nbsp; <- The main theme file for Skeleton
* [app.postcss](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/app.postcss) &nbsp; <i class="fa-solid fa-left-long"></i> <- Contains some extra styles & CSS corrections

### Ripple

For the ripple-effect, the [svelte-ripple-action](https://github.com/Posandu/svelte-ripple-action)
NPM package was installed.

To add the Ripple effect to a button or anchor tag, you can use the `use:ripple` Svelte action.

e.g.
```svelte
<button class="btn variant-filled-primary" use:ripple>primary</button>
```

> [!NOTE]
>
> The default color of the ripple is set to the text color (in [app.postcss](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/app.postcss)).


> [!WARNING]
>
> The ripple effect is not cannot be added to component which contains other components (like buttons)
that are not exposed.
>
> Components such as the pre-built modals, paginators and stepper, will not have the ripple effect added.