export const useTitle = (title: string, options = {}) => {
  useSeoMeta({
    title,
  });
  const route = useRoute();
  route.meta.title = title;
  route.meta.titleOptions = options;
};
