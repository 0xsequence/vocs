import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {} from 'vite';
import { resolveVocsConfig } from '../utils/resolveVocsConfig.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
export function resolveVocsModules() {
    let config;
    return {
        name: 'resolve-vocs',
        async buildStart() {
            config = (await resolveVocsConfig()).config;
        },
        transform(code_, id) {
            let code = code_;
            if (id.startsWith(resolve(config.rootDir))) {
                if (['.js', '.jsx', '.js', '.js', '.md', '.mdx'].includes(extname(id))) {
                    code = code.replace(/import (.*) from ("|')vocs("|')/g, `import $1 from $2${resolve(__dirname, '../..')}$3`);
                    code = code.replace(/import (.*) from ("|')vocs\/components("|')/g, `import $1 from $2${resolve(__dirname, '../../components')}$3`);
                }
            }
            return code;
        },
    };
}
//# sourceMappingURL=resolve-vocs-modules.js.map