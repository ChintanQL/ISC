module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-plugin-smoothscroll`,
	{
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'shop.australiansportscamps.com.au',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
		excludedRoutes: [
		  '/*/*/media',
		  '/*/*/connect/stripe',
		],
      },
    },
	{
    resolve: `gatsby-plugin-segment-js`,
    options: {
      // your segment write key for your production environment
      // when process.env.NODE_ENV === 'production'
      // required; non-empty string
      prodKey: `SEGMENT_PRODUCTION_WRITE_KEY`,

      // if you have a development env for your segment account, paste that key here
      // when process.env.NODE_ENV === 'development'
      // optional; non-empty string
      devKey: `fPn6Nx2v4ACoy3pEa5yTv2uFiTXE6HGv`,

      // boolean (defaults to false) on whether you want
      // to include analytics.page() automatically
      // if false, see below on how to track pageviews manually
      trackPage: true,

      // number (defaults to 50); time to wait after a route update before it should
      // track the page change, to implement this, make sure your `trackPage` property is set to `true`
      trackPageDelay: 50,

      // If you need to proxy events through a custom endpoint,
      // add a `host` property (defaults to https://cdn.segment.io)
      // Segment docs:
      //   - https://segment.com/docs/connections/sources/custom-domains
      //   - https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#proxy
      host: `https://override-segment-endpoint`,

      // boolean (defaults to false); whether to delay load Segment
      // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
      // This feature will force Segment to load _after_ either a page routing change
      // or user scroll, whichever comes first. This delay time is controlled by
      // `delayLoadTime` setting. This feature is used to help improve your website's
      // TTI (for SEO, UX, etc).  See links below for more info.
      // NOTE: But if you are using server-side routing and enable this feature,
      // Segment will never load (because although client-side routing does not do
      // a full page refresh, server-side routing does, thereby preventing Segment
      // from ever loading).
      // See here for more context:
      // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
      // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
      // Problem/solution: https://marketingexamples.com/seo/performance
      delayLoad: false,

      // number (default to 1000); time to wait after scroll or route change
      // To be used when `delayLoad` is set to `true`
      delayLoadTime: 1000

      // Whether to completely skip calling `analytics.load()`.
      // ADVANCED FEATURE: only use if you are calling `analytics.load()` manually
      // elsewhere in your code or are using a library
      // like: https://github.com/segmentio/consent-manager that will call it for you.
      // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
      manualLoad: false
    }
  },
	 {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) =>
          node.frontmatter.tags !== 'exempt',
      },
    },
	{
      resolve: 'gatsby-plugin-global-context',
      options: {
        context: {
          BACK_URL: "https://shop.australiansportscamps.com.au"
        }
      }
    },
	{       
		resolve: '@pasdo501/gatsby-source-woocommerce',
		options: {
			api: 'shop.australiansportscamps.com.au',
			verbose: true,
			https: true,
			api_keys: {
				consumer_key: 'ck_267148935fa9cd6127b534486c64128084c56bc5',
				consumer_secret: 'cs_026a85ca972dc7ed0c2ac5d7b4fef2b412413871',
			},
			fields: ['products', 'products/categories', 'products/attributes'],
			query_string_auth: false,
			api_version: 'wc/v3',
			per_page: 100,
			wpAPIPrefix: 'wp-json',
			encoding: 'utf8',
			axios_config: {
		   
			}
		}
	},
	
	{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
        },
        `gatsby-remark-lazy-load`,
      ]
    }
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
	{
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'asc'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
