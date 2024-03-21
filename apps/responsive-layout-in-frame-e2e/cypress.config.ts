import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run responsive-layout-in-frame:serve:development',
        production: 'nx run responsive-layout-in-frame:serve:production',
      },
      ciWebServerCommand: 'nx run responsive-layout-in-frame:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
