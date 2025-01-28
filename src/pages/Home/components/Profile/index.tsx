import {
  ArrowUpStyled,
  BioContainer, BuildingStyled, Container, FooterContainer,
  GitHubStyled,
  HeaderProfile, InfoContainer,
  UserGroupStyled,
} from './styles'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from
  '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'

export function Profile() {
  const { userInfo } = useContext(UserContext)

  return (
    <Container>
      <img src={userInfo.avatarUrl} alt="" />
      <InfoContainer>
        <HeaderProfile>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.htmlUrl} target="_blank" rel="noopener noreferrer">
            GITHUB
            <ArrowUpStyled icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderProfile>
        <BioContainer>
          <span>
            {userInfo.bio}
          </span>
        </BioContainer>
        <FooterContainer>
          <div>
            <GitHubStyled icon={faGithub} />
            <span>{userInfo.login}</span>
          </div>
          {userInfo.company
            ? (
              <div>
                <BuildingStyled icon={faBuilding} />
                <span>{userInfo.company}</span>
              </div>
              )
            : ''}

          <div>
            <UserGroupStyled icon={faUserGroup} />
            <span>{userInfo.followers} seguidores</span>
          </div>
        </FooterContainer>
      </InfoContainer>
    </Container>
  )
}
