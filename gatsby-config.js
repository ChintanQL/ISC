module.exports = {
  siteMetadata: {
    title: `Australian Sports Camps`,
    description: `ASC provides the best sports coaching for Australian children and has done so for over 38 years. We run structured skill-improvement sport camps in Australia ensuring that participants have fun whilst developing a deeper love and enthusiasm for their chosen sport.`,
    author: `@australiansportscamps`,
	siteUrl: 'https://australiansportscamps.com.au',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
'gatsby-plugin-robots-txt', 
	{
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
           
            // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
            output: "/sitemap.xml",
            
        }
    },
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
  /*{
    resolve: `gatsby-plugin-segment-js`,
    options: {
     
      prodKey: "fPn6Nx2v4ACoy3pEa5yTv2uFiTXE6HGv",
      devKey: "fPn6Nx2v4ACoy3pEa5yTv2uFiTXE6HGv",
      trackPage: true,
      trackPageDelay: 50,
      delayLoad: false,
      delayLoadTime: 1000,
      manualLoad: false
    }
  },*/	  
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
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-PRK5WQ",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
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
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: "#FF6600",
      // Disable the loading spinner.
      showSpinner: true,
    },
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

	
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://australiansportscamps.com.au',
		},
	},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
