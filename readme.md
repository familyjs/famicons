# Famicons

[Famicons](http://famicons.web.app/) is a completely open-source icon set with 1,300 icons crafted for web, iOS, Android, and desktop apps. Famicons was built for [Family Framework](https://family-js.web.app/), so icons have both Material Design and iOS versions.

Note: All brand icons are trademarks of their respective owners. The use of these trademarks does not indicate endorsement of the trademark holder by Family, nor vice versa.

We intend for this icon pack to be used with [Family](http://family-js.web.app/), but it’s by no means limited to it. Use them wherever you see fit, personal or commercial. They are free to use and licensed under [MIT](http://opensource.org/licenses/MIT).


## Using the Web Component

The Famicons Web Component is an easy and performant way to use Famicons in your app. The component will dynamically load an SVG for each icon, so your app is only requesting the icons that you need.

Also note that only visible icons are loaded, and icons which are "below the fold" and hidden from the user's view do not make fetch requests for the svg resource.

### Installation

If you're using [Family Framework](https://family-js.web.app/), Famicons is packaged by default, so no installation is necessary. Want to use Famicons without Family Framework? Place the following `<script>` near the end of your page, right before the closing </body> tag, to enable them.

```html
<script src="https://unpkg.com/famicons@latest/dist/famicons.js"></script>
```

### Basic usage

To use a built-in icon from the Famicons package, populate the `name` attribute on the fml-icon component:

```html
<fml-icon name="heart"></fml-icon>
```

### Custom icons

To use a custom SVG, provide its url in the `src` attribute to request the external SVG file. The `src` attribute works the same as `<img src="...">` in that the url must be accessible from the webpage that's making a request for the image. Additionally, the external file can only be a valid svg and does not allow scripts or events within the svg element.

```html
<fml-icon src="/path/to/external/file.svg"></fml-icon>
```

## Variants
Each app icon in Famicons has a `filled`, `outline` and `sharp` variant. These different variants are provided to make your app feel native to a variety of platforms. The filled variant uses the default name without a suffix. Note: Logo icons do not have outline or sharp variants.

```html
<fml-icon name="heart"></fml-icon> <!--filled-->
<fml-icon name="heart-outline"></fml-icon> <!--outline-->
<fml-icon name="heart-sharp"></fml-icon> <!--sharp-->
```

### Platform specificity
When using icons in Family Framework you can specify different icons per platform. Use the `md` and `ios` attributes and provide the platform specific icon/variant name.

```html
<fml-icon ios="heart-outline" md="heart-sharp"></fml-icon>
```

## Size

To specify the icon size, you can use the size attribute for our pre-defined font sizes.

```html
<fml-icon size="small"></fml-icon>
<fml-icon size="large"></fml-icon>
```

Or you can set a specific size by applying the `font-size` CSS property on the `fml-icon` component. It's recommended to use pixel sizes that are a multiple of 8 (8, 16, 32, 64, etc.)

```css
fml-icon {
  font-size: 64px;
}
```

## Color

Specify the icon color by applying the `color` CSS property on the `fml-icon` component.

```css
fml-icon {
  color: blue;
}
```

## Stroke width
When using an `outline` icon variant it is possible to adjust the stroke width, for improved visual balance relative to the icon's size or relative to the width of adjacent text. You can set a specific size by applying the `--famicon-stroke-width` CSS custom property to the `fml-icon` component. The default value is 32px.

```html
<fml-icon name="heart-outline"></fml-icon>
```

```css
fml-icon {
  --famicon-stroke-width: 16px;
}
```

## License

Famicons is licensed under the [MIT license](http://opensource.org/licenses/MIT).
