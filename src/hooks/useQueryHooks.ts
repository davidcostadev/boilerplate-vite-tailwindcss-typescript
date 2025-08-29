import {
  type UseMutationOptions,
  type UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { entityService } from '../api/services';
import type { Entity } from '../api/types';

export const useEntities = (options?: UseQueryOptions<Entity[]>) => {
  return useQuery({
    queryKey: ['entities'],
    queryFn: entityService.getEntities,
    ...options,
  });
};

export const useEntity = (id: number, options?: UseQueryOptions<Entity>) => {
  return useQuery({
    queryKey: ['entities', id],
    queryFn: () => entityService.getEntityById(id),
    ...options,
  });
};

export const useCreateEntity = (
  options?: UseMutationOptions<Entity, Error, Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: entityService.createEntity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entities'] });
    },
    ...options,
  });
};

export const useUpdateEntity = (
  options?: UseMutationOptions<
    Entity,
    Error,
    {
      id: number;
      entityData: Partial<Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>>;
    }
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, entityData }) => entityService.updateEntity(id, entityData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['entities', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['entities'] });
    },
    ...options,
  });
};

export const useDeleteEntity = (options?: UseMutationOptions<void, Error, number>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: entityService.deleteEntity,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['entities'] });
      queryClient.removeQueries({ queryKey: ['entities', id] });
    },
    ...options,
  });
};
