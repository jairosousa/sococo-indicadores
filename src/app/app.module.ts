import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { AppRoutes } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './util-template/user/user.component';
import { TableComponent } from './util-template/table/table.component';
import { TypographyComponent } from './util-template/typography/typography.component';
import { IconsComponent } from './util-template/icons/icons.component';
import { MapsComponent } from './util-template/maps/maps.component';
import { NotificationsComponent } from './util-template/notifications/notifications.component';
import { UpgradeComponent } from './util-template/upgrade/upgrade.component';
import { SidebarModule } from './util-template/sidebar/sidebar.module';
import { InputComponent } from './shared/input/input.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmafibraModule } from './amafibra/amafibra.module';
import { AcquaModule } from './acqua/acqua.module';
import { SococoModule } from './sococo/sococo.module';
import { ResumoDiarioModule } from './resumo-diario/resumo-diario.module';
import { CocoComponent } from './dashboard/coco/coco.component';
import { CriFlococoComponent } from './dashboard/cri-flococo/cri-flococo.component';
import { OleoComponent } from './dashboard/oleo/oleo.component';
import { AguaCocoComponent } from './dashboard/agua-coco/agua-coco.component';
import { FardoComponent } from './dashboard/fardo/fardo.component';
import { CacambaComponent } from './dashboard/cacamba/cacamba.component';
import { TortaComponent } from './dashboard/torta/torta.component';
import { LoginModule } from './login/login.module';
import { CocoGerminadoComponent } from './dashboard/coco-germinado/coco-germinado.component';
import { CaixaPadraoComponent } from './dashboard/caixa-padrao/caixa-padrao.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CocoComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CriFlococoComponent,
    OleoComponent,
    AguaCocoComponent,
    FardoComponent,
    CacambaComponent,
    TortaComponent,
    CocoGerminadoComponent,
    CaixaPadraoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes,
    HttpModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    SococoModule,
    AcquaModule,
    AmafibraModule,
    ResumoDiarioModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
