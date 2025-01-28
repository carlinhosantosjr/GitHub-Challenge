import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { Container, ContentContainer, SearchContainerHeader } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchContainerHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </SearchContainerHeader>
      <SearchForm />
      <ContentContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ContentContainer>
    </Container>
  )
}
