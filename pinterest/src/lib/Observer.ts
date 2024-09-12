export const Observer = (hasNextPage, fetchNextPage, loadMore) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        //요소가 보일떄
        fetchNextPage();
      }
    },
    { threshold: 0.1 } // 요소가 10% 보일 때 콜백 호출
  );

  const current = loadMore.current;
  if (current) {
    observer.observe(current); // 옵저버 작동
  }
  return () => {
    if (current) {
      observer.unobserve(current); //옵저배 해제
    }
  };
};
