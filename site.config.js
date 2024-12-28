import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '031862645dd34e6e94d8169685bae7b4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'JnsBlog',
  domain: 'https://obvious-possum-a82.notion.site/JnsBlog-16a8a94a1c2a8068aa93c92bc84b8835?pvs=4',
  author: 'Diame',

  // open graph metadata (optional)
  description: 'JnsBlog',

  // social usernames (optional)
  // twitter: '#',
  github: 'Diame58',
  // linkedin: '#',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  
}