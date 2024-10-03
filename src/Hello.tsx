import React, { FC, useEffect, useState } from 'react';
import './Hello.pcss';
import { useRemovedByExternal } from './useRemovedByExternal';
import { useUnmount } from './useUnmount';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  console.log("### Hello")
  const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);
  const isRemoved = useRemovedByExternal(containerElement);
  console.log("### containerRef", containerElement)
  console.log("### isRemoved", isRemoved)

  useEffect(() => {
    if (isRemoved) {
      console.log("### isRemoved", isRemoved)
    }
  }, [isRemoved]);

  useUnmount(() => {
    console.log("### unmounting Hello")
  })

  return isRemoved ? null : <div ref={ref => setContainerElement(ref)}><Inner /></div>;
}

const Inner: FC = () => {
  useUnmount(() => {
    console.log('### unmounting Inner');
  })

  return <div className={'Hello'}>
    <h1>Hello React</h1>
  </div>
}
