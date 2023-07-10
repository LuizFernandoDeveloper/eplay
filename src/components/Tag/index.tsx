import { TagContainer } from './styles'

export type PropsTag = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: PropsTag) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
