import React from 'react'

interface ContainerProps {
  as?: (keyof JSX.IntrinsicElements) | React.ComponentType;
}

const Container: React.FC<ContainerProps> = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag
      style={{
        maxWidth: 'var(--size-max-width)',
        margin: '0 auto',
        padding: '1rem',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
