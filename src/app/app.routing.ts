import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './util-template/user/user.component';
import { TableComponent } from './util-template/table/table.component';
import { TypographyComponent } from './util-template/typography/typography.component';
import { IconsComponent } from './util-template/icons/icons.component';
import { MapsComponent } from './util-template/maps/maps.component';
import { NotificationsComponent } from './util-template/notifications/notifications.component';
import { UpgradeComponent } from './util-template/upgrade/upgrade.component';
import { AcquaComponent } from './acqua/acqua.component';
import { AmafibraComponent } from './amafibra/amafibra.component';
import { AcquaListaComponent } from './acqua/lista/acqua-lista.component';
import { AmafibraListaComponent } from './amafibra/lista/amafibra-lista.component';
import { SococoComponent } from './sococo/sococo.component';
import { SococoListaComponent } from './sococo/lista/sococo-lista.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'sococo',
        component: SococoComponent
    },
    { path: "sococo-lista", component: SococoListaComponent },
    {
        path: 'acqua',
        component: AcquaComponent
    },
    { path: "acqua-lista", component: AcquaListaComponent },
    {
        path: 'amafibra',
        component: AmafibraComponent
    },
    {
        path: 'amafibra-lista',
        component: AmafibraListaComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
