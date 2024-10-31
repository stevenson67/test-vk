import { makeAutoObservable } from 'mobx';

interface Repo {
    id: number;
    name: string;
    description: string;
    url: string;
}

class GitStore {
    repos: Repo[] = [];  // Список репозиториев
    page = 1;  // Текущая страница для пагинации
    loading = false;  // Индикация загрузки
    error = '';  // Ошибки загрузки

    constructor() {
        makeAutoObservable(this);
    }

    async fetchRepos() {
        this.loading = true;
        try {
            const response = await fetch(
                `https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=${this.page}`
            );
            const data = await response.json();
            this.repos = [...this.repos, ...data.items];  // Добавление новых элементов к списку
            this.page += 1;  // Переход к следующей странице
        } catch (err) {
            this.error = 'Failed to load repositories';
        } finally {
            this.loading = false;  // Сброс индикатора загрузки
        }
    }

    // Метод для удаления элемента из списка
    removeRepo(id: number) {
        this.repos = this.repos.filter(repo => repo.id !== id);
    }

    // Метод для локального редактирования элемента
    editRepo(id: number, newData: Partial<Repo>) {
        this.repos = this.repos.map(repo =>
            repo.id === id ? { ...repo, ...newData } : repo
        );
    }
}

export const gitStore = new GitStore();
