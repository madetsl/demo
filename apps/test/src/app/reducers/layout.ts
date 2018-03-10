import * as layout from '../actions/layout';

export interface State {
    showSidenav: boolean;
}

const initialState: State = {
    showSidenav: false,
};

export function reducer(state = initialState, action: layout.LayoutActions): State {
    switch (action.type) {
        case layout.LayoutActionTypes.CloseSidenav:
            return {
                showSidenav: false
            };

        case layout.LayoutActionTypes.OpenSidenav:
            return {
                showSidenav: true
            };

        default:
            return state;
    }
}

export const getShowSidenav = (state: State) => state.showSidenav;