import apiClient from './client';
import type { Entity } from './types';

export const entityService = {
  getEntities: async (): Promise<Entity[]> => {
    const response = await apiClient.get<Entity[]>('/api/entity');
    return response.data;
  },

  getEntityById: async (id: number): Promise<Entity> => {
    const response = await apiClient.get<Entity>(`/api/entity/${id}`);
    return response.data;
  },

  createEntity: async (
    entityData: Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Entity> => {
    const response = await apiClient.post<Entity>('/api/entity', entityData);
    return response.data;
  },

  updateEntity: async (
    id: number,
    entityData: Partial<Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>>
  ): Promise<Entity> => {
    const response = await apiClient.put<Entity>(`/api/entity/${id}`, entityData);
    return response.data;
  },

  deleteEntity: async (id: number): Promise<void> => {
    await apiClient.delete(`/api/entity/${id}`);
  },
};
