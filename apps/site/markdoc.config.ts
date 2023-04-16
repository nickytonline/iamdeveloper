import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import { embedEmbed} from './src/utilties/markdoc'


export default defineMarkdocConfig({
  tags: {embed: {
      render: (...args) => {
        console.dir('embed', args)
        return embedEmbed(args[0])
      }
    },
  },
});