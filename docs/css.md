# CSS

## Considerations

How can we best standardize our CSS practices so that our styles are clearly understandable, efficient, and consistent across all DS projects without slowing down development time?

* [Google CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml#ID_and_Class_Naming)
* [CSS Selector Efficiency](http://csswizardry.com/2011/09/writing-efficient-css-selectors/)

## Selector Efficiency

* Classes/IDs over Type/Attribute (div, input[type="input"]) selectors
* Selector efficiency is usually a concern only on larger sites, but best practice should be followed on smaller sites when possible
* Find a balance between CSS performance and CSS file readability

## Selector format

* Use dashes (-) as separation on both IDs and Classes
* No camelCase
* No underscores (to avoid confusion since we aren't using BEM)
* Selectors should be "as short as possible but as long as necessary"

## Select Prefix

* On sites that may load external CSS libraries (i.e. a Wordpress or Magento site that may use extensions), all DS written CSS must us a prefix for IDs and Classes.
* Standard prefix is `ds-` unless the project requires something more specific.
* Prefix should be used on all classes

## Property Order
* Since preferences on property order can vary greatly between individuals, we leave no restrictions on this in the interest of development time.

## Style Fallback Strategy
* (TODO: add buttons example)

## Lint

* We use [SCSS-Lint](https://github.com/brigade/scss-lint) to enforce DS CSS syntax conventions
* Default configuration can be found in DS-Bootstrap repo on Beanstalk

## Sass

### Nesting

* Ideal maximum style nesting is 2 deep
* Lint will warn at 3 levels of nesting, error out at 5 levels
* Where possible, use IDs/Classes to reduce nesting

### Vendor Prefixes

* Use autoprefixer over mixins/Compass

### Media Queries

* Two approaches, one using a mixin and one using written out queries with breakpoint variables
* Mixin is shorter to write, but leads to longer SASS builds
* Written out queries result in faster SASS build and allow for more control over each query, but may
* [Resource](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32)
* Mixin
```
$breakpoint: 768px;

@mixin mobile {
    @media (max-width: $breakpoint) { @content; }
}
hgroup {
	position: relative;
	margin-bottom: 50px;
	@include mobile {
	   margin-bottom: 35px;
	}
}
```
* Written Out
```
$breakpoint: 768px;

hgroup {
	position: relative;
	margin-bottom: 50px;
	@media (min-width: $breakpoint) {
	   margin-bottom: 35px;
	}
}
```
```
$breakpoint: "(max-width : 320px)";

hgroup {
	position: relative;
	margin-bottom: 50px;
	@media #{$breakpoint} {
	   margin-bottom: 35px;
	}
}
```

## Animations
* TODO

## Mobile First
* TODO
