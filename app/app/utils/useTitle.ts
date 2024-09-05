export const useTitle = (title: string) => {
  useSeoMeta({
    title,
  });
  const route = useRoute();
  route.meta.title = title;
};
