// @ts-ignore
import { defineMarkdocConfig } from '@astrojs/markdoc/config';
// @ts-ignore
import Embed from './src/components/Embed.astro';
import TwitterEmbed from './src/components/TwitterEmbed.astro';
import YouTubeEmbed from './src/components/YouTubeEmbed.astro';

export default defineMarkdocConfig({
  tags: {
    embed: {
      render: Embed,
      attributes: {
        url: { url: String },
      },
    },
    twitter: {
      render: TwitterEmbed,
      attributes: {
        tweetId: { tweetId: String },
      },
    },
    codepen: {
      render: Embed,
      attributes: {
        url: { url: String },
      },
    },
    youtube: {
      render: YouTubeEmbed,
      attributes: {
        videoId: { videoId: String },
      },
    },
    link: {
      render: Embed,
      attributes: {
        url: { url: String },
      },
    },
  },
});
