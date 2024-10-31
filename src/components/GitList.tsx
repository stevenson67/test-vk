import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Button, Spin, Input } from 'antd';
import { gitStore } from '../store/GitStore';

const GitList = observer(() => {
    const [editId, setEditId] = useState<number | null>(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        gitStore.fetchRepos();
    }, []);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
            gitStore.fetchRepos();
        }
    };

    const handleEdit = (repoId: number, currentName: string) => {
        setEditId(repoId);
        setNewName(currentName);
    };

    const saveEdit = (repoId: number) => {
        gitStore.editRepo(repoId, { name: newName });
        setEditId(null);
        setNewName('');
    };

    return (
        <div className="App-wrap" onScroll={handleScroll}>
            <Spin spinning={gitStore.loading}>
                <List
                    itemLayout="horizontal"
                    dataSource={gitStore.repos}
                    renderItem={repo => (
                        <List.Item
                            actions={[
                                <Button onClick={() => gitStore.removeRepo(repo.id)}>Delete</Button>,
                                <Button onClick={() => handleEdit(repo.id, repo.name)}>Edit</Button>
                            ]}
                        >
                            <List.Item.Meta
                                title={
                                    editId === repo.id ? (
                                        <>
                                            <Input
                                                value={newName}
                                                onChange={(e) => setNewName(e.target.value)}
                                            />
                                            <Button onClick={() => saveEdit(repo.id)}>Save</Button>
                                        </>
                                    ) : (
                                        <a href={repo.url}>{repo.name}</a>
                                    )
                                }
                                description={repo.description}
                            />
                        </List.Item>
                    )}
                />
            </Spin>
        </div>
    );
});

export default GitList;
