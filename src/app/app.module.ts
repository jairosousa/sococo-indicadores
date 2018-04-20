import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { SococoModule } from './sococo/sococo.module';

import { AppRoutes } from './app.routing';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent } from './util-template/user/user.component';
import { TableComponent } from './util-template/table/table.component';
import { TypographyComponent } from './util-template/typography/typography.component';
import { IconsComponent } from './util-template/icons/icons.component';
import { MapsComponent } from './util-template/maps/maps.component';
import { NotificationsComponent } from './util-template/notifications/notifications.component';
import { UpgradeComponent } from './util-template/upgrade/upgrade.component';
import { SidebarModule } from './util-template/sidebar/sidebar.module';
import { AcquaComponent } from './acqua/acqua.component';
import { AmafibraComponent } from './amafibra/amafibra.component';
import { AcquaListaComponent } from './acqua/lista/acqua-lista.component';
import { AmafibraListaComponent } from './amafibra/lista/amafibra-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AcquaComponent,
    AcquaListaComponent,
    AmafibraComponent,
    AmafibraListaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes,
    HttpModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    SococoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
