import { INews } from '../../../types/index';

import './news.css';

class News {
    draw(data: INews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsContainer = document.querySelector('.news') as HTMLDivElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.png'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLLIElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLLIElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLHeadingElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLHeadingElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent =
                item.description;
            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
