import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    submenu: boolean;
    subItem?: SubItem[]
}
export interface SubItem {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '', submenu: false },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '', submenu: false },
    { path: 'table', title: 'Table List', icon: 'ti-view-list-alt', class: '', submenu: false },
    { path: 'typography', title: 'Typography', icon: 'ti-text', class: '', submenu: false },
    { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '', submenu: false },
    { path: 'maps', title: 'Maps', icon: 'ti-map', class: '', submenu: false },
    { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '', submenu: false },
    { path: 'amafibra', title: 'Amafibra', icon: 'ti-angle-right', class: 'dropdown', submenu: true,
        subItem: [
            { path: 'amafibra-lista', title: 'listar', icon: 'ti-panel', class: '' }
        ]   
    },
    { path: 'acqua', title: 'Acqua', icon: 'ti-angle-right', class: 'dropdown', submenu: true,
        subItem: [
            { path: 'acqua-lista', title: 'listar', icon: 'ti-angle-right', class: '' }
    ]    
    },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'ti-export', class: 'active-pro', submenu: false},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
