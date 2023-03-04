import News from './news/news';
import Sources from './sources/sources';
import { INewsResp, ISourceResp } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsResp) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: ISourceResp) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
