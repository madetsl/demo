
import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
    OpenSidenav = '[Layout] Open Sidenav',
    CloseSidenav = '[Layout] Close Sidenav',
}

export class OpenSidenav implements Action {
    public readonly type = LayoutActionTypes.OpenSidenav;

}

export class CloseSidenav implements Action {
    public readonly type = LayoutActionTypes.CloseSidenav;

}

export type LayoutActions = OpenSidenav | CloseSidenav;