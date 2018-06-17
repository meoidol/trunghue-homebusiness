import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (HttpLoaderFactory),
    deps: [HttpClient]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})

export class AppTranslationModule {
  constructor(
    private translate: TranslateService
  ) {
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }
}
