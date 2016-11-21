/**
 * Created by phong.tran.nam on 21/11/2016.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import  {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);