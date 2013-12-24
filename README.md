


># angular-ads directive 

[Homepage](http://olaji.de/angular-ads)

An [AngularJS](http://angularjs.org/) directive that creates ads from json files

## Getting Started

1. `bower install angular-ads` or download `angular-ads.js` & `angular-ads.css` and link them in your page
2. Add `angular-ads` to your application's module dependencies.
3. use the `og-ads` directive 


## Example

See the [homepage](http://olaji.de/angular-ads) for a live example.

```html
<div og-ads>
</div>
```

The `og-ads` attribute will get json from the file path  `ads/ads.json` by default


## Attributes

### `og-ads-url`

You can change the file path from where `og-ads` gets json by adding an additional attribute `og-ads-url` 

*Example:*

```html
<div og-ads og-ads-url="ads/otherads.json">
</div>
```




## License

MIT


[@oojx][1]


  [1]: http://twitter.com/oojx
