### Usage of Config.yaml

Example config is here: [**config.yaml**](/config.example.yaml)

You can use `title`, `subtitle` and `image` variables for your website. Same variables are available for post pages.
```yaml
title: Eternity
params:
  subtitle: Eternity is a minimalist Hugo theme designed for portfolio sites with a fresh feel.
  image: '/images/about.png`
```

You can use `googleAnalytics` variable to set Analytics.
```yaml
googleAnalytics: ''
```

You can use `plausible` variable to set Plausible.
```yaml
params:
  plausible: ''
```

You can use `copyright` and `author` variables to set Copyright notice.
```yaml
params:
  copyright: ''
  author: ''
```

You can use `socials` array to set your social accounts.

- `icon` is a font-awesome icon code.
- `landing: true` makes an icon invisible on the landing page but visible inside website.
- `rel_me: true` adds the HTML attribute `rel="me"` to the link. This is useful to verify the link to your Mastodon profile.

```yaml
params:
  socials:
    - icon: 'far fa-envelope fa-lg'
      url: 'mailto:eternity@bora.sh'
      landing: true
    - icon: 'fab fa-github fa-lg'
      url: 'https://github.com/boratanrikulu/eternity'
      landing: true
    - icon: 'fab fa-instagram fa-lg'
      url: 'https://instagram.bora.sh/eternity'
    - icon: 'fab fa-linkedin-in fa-lg'
      url: 'https://linkedin.bora.sh/in/eternity'
```

You can change `homepage` link.
```yaml
params:
  homepage: "/work"
```

Menu settings via _index.md by sections
