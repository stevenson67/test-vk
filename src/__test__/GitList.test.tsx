import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { gitStore } from '../store/GitStore';
import GitList from '../components/GitList';
import '@testing-library/jest-dom';

beforeEach(() => {
    gitStore.repos = []; // Сброс перед каждым тестом
});

test('deletes repo from the list', async () => {
    gitStore.repos = [{ id: 1, name: 'Test Repo', description: 'Desc', url: '' }];

    render(<GitList />);

    // Нажимаем на кнопку delete
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    // Проверка удаления
    await waitFor(() => {
        expect(screen.queryByText(/test repo/i)).toBeNull();
    });
});

test('edits repo in the list', async () => {
    gitStore.repos = [{ id: 1, name: 'Test Repo', description: 'Desc', url: '' }];

    render(<GitList />);

    // Нажимаем на кнопку edit
    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    // Вводим новое имя
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Edited' } });

    // Нажимаем на кнопку сохранения
    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);

    await waitFor(() => {
        const editedRepo = gitStore.repos.find(repo => repo.id === 1);
        expect(editedRepo?.name).toBe("Edited"); // Проверка, что название изменилось
    });
});


