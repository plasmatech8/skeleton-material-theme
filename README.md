# Skeleton Material Theme

A an example app which attempts to create a Material-like theme using [SvelteKit](https://kit.svelte.dev/)
and [Skeleton](https://www.skeleton.dev/) UI.

This site demo has been deployed to [GitHub pages](https://plasmatech8.github.io/skeleton-material-theme/).

<img src="./docs/home.png" style="border-radius: 1rem">

## Theme

### Configuration

The theme is configured in two files:

* [material.ts](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/material.ts) &nbsp;&nbsp;&nbsp;&nbsp; <- The main theme file for Skeleton
* [app.postcss](https://github.com/plasmatech8/skeleton-material-theme/blob/main/src/app.postcss) &nbsp; <i class="fa-solid fa-left-long"></i> <- Contains some extra styles & CSS corrections

### Ripple Effect

The [svelte-ripple-action](https://github.com/Posandu/svelte-ripple-action)
NPM package was installed to implement the material ripple.

```bash
npm install svelte-ripple-action
```

To add a Ripple effect to a DOM element, you can use the `use:ripple` Svelte action.

e.g.
```svelte
<button class="btn variant-filled-primary" use:ripple>primary</button>
```

> [!NOTE]
>
> The default color of the ripple is set to the text color.
>
> You can set the ripple color either using CSS, Tailwind class, or using the Svelte action arguments.


> [!WARNING]
>
> The ripple effect action cannot be added to child elements of pre-built components because the elements (i.e. buttons) are not exposed to the developer and `use:ripple` cannot be added.
>
> If you wish to add ripple effects to child elements of pre-built components (modals, paginators, steppers, etc) - you need to configure JavaScript, as described below.

#### How to implement Automatic global ripple effect

If you want the ripple effect to be configured globally (or for chidren of a DOM element), without needing to use `use:ripple`, you can consider adding JavaScript to apply the ripple effect to all elements with specific classes.

This can allow buttons inside of pre-built components (modals, toasts, stepper-form, etc) to have ripple effects.

For example, below is a Svelte action which you can place in `+layout.svelte` to automatically add ripple effects to all elements with the `btn` or `btn-icon` class:

```ts
/**
 * Every 100ms, add ripple effect to all .btn, .btn-icon class elements
 * if they do not already have a ripple effect configured.
 */
function rippleBtnClass(e: Element) {
    setInterval(() => {
        const btns = e.querySelectorAll('.btn, .btn-icon');
        btns.forEach((el) => {
            if (!el.classList.contains('ripple-effect')) {
                ripple(el as HTMLElement);
            }
        });
    }, 100);
}
```

Usage:

```svelte
<svelte:body use:rippleBtnClass />
```
