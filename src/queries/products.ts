// src/queries/products.ts
import { _rocktreeProducts } from '@gift-searcher/sdk';
import { $ } from '../client';
import { useQuery } from '@tanstack/react-query';

export const useProducts = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['products', searchTerm],
    queryFn: async () => {
      if (!searchTerm) return [];
      
      const result = await $(_rocktreeProducts)
        .where({ 
          productName: { $containsIgnoreCase: searchTerm } 
        })
        .fetchPageWithErrors({ $pageSize: 20 });

      if (result.ok) {
        return result.value.data;
      }
      return [];
    },
    enabled: searchTerm !== undefined,
  });
};

export const useProductDetails = (productId: string) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const result = await $(_rocktreeProducts)
        .fetchOneWithErrors(productId);

      if (result.ok) {
        return result.value;
      }
      throw new Error('Product not found');
    },
  });
};