import BaseStore from 'fluxible/addons/BaseStore';
import routesConfig from '../configs/routes';
import RouteStore from './RouteStore';

export default class ApplicationStore extends BaseStore {

    static storeName = 'ApplicationStore'

    static handlers = {
        'NAVIGATE_SUCCESS': 'handlePageTitle'
    }

    constructor(dispatcher) {
        super(dispatcher);
        this.currentPageName = null;
        this.currentPage = null;
        this.pages = routesConfig;
        this.pageTitle = '';
    }
    handlePageTitle(currentRoute) {
        this.dispatcher.waitFor(RouteStore, () => {
            if (currentRoute && currentRoute.get('title')) {
                this.pageTitle = currentRoute.get('title');
                this.emitChange();
            }
        });
    }
    getCurrentPageName() {
        return this.currentPageName;
    }
    getPageTitle() {
        return this.pageTitle;
    }
    getPages() {
        return this.pages;
    }
    dehydrate() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            pageTitle: this.pageTitle
        };
    }
    rehydrate(state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.pageTitle = state.pageTitle;
    }
}
