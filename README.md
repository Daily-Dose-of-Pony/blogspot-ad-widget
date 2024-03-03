# Blogspot Ad Widget
🔊 Hacks to implement an ad widget on Blogspot.

## Specification
### Behaviour
Ad sections are populated one-by-one on page load. The exact ad content is selected randomly, based on the weight defined in the ad list files they point to.

### Integration
The script itself can either be loaded from a URL or bundled in-line.

```html
<script src="urlToJs"></script>
```

For the sections you want to populate with ads, specify `div` elements with class `ad-view`, and set the `x-list` attribute to where the ad list file is expected to be loaded from.

Beware that if the ad list file is loaded from another domain, the CORS rules will kick in.

```html
<div class="ad-view" x-list="https://example.com/adlist.tsv"></div>
```

### Ad list
The ad list file is a standard TSV (tab-seperated value) file for ease of modification. It contains exactly four fields: `weight`, `type`, `codec` and `src`.

- `weight`: A non-negative integer. The higher the weight, the more likely an ad gets shown.

- `type`: One of `img` (image) and `vid` (video).

- `codec`: A list of comma-seperated IDs indicating available files. The script will attempt to generate fallbacks, prioritizing bandwidth saves while ensuring the ad itself gets loaded on the client.
  - Images
    - `jxl`: A JPEG XL image. Expects `.jxl`.
    - `webp`: A WebP image. Expects `.webp`.
    - `jpg`: A JPEG image. Expects `.jpg`.
    - `png`: A still PNG image. Expects `.png`.
    - `apng`: An animated PNG image. Expects `.apng`.
    - `gif`: An animated GIF image. Expects `.gif`.
  - Videos
    - `webm`: A WebM video. Expects `.webm`.
	- `mp4`: An MPEG-4 video. Expects `.mp4`.
- `src`: A URL without the final extension names.
