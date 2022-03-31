import { useMediaQuery } from '@chakra-ui/react';
import { RefObject, useState } from 'react';

const useScrollByRef = (ref: RefObject<HTMLDivElement>): void => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [previewOffsetTop, setPreviewOffsetTop] = useState<number>(0);

  if (ref.current !== null) {
    if (isSmallScreen) {
      setPreviewOffsetTop(ref.current.offsetTop);
      let offsetTop: number;
      if (ref.current.offsetTop < previewOffsetTop) {
        offsetTop = -(previewOffsetTop - ref.current.offsetTop);
      } else {
        offsetTop = ref.current.offsetTop - previewOffsetTop;
      }
      window.scrollBy(0, offsetTop);
    } else {
      ref.current.scrollIntoView();
    }
  }
};

export default useScrollByRef;
