import {
  ArrowUpStyled,
  BioContainer, BuildingStyled, Container, FooterContainer,
  GitHubStyled,
  HeaderProfile, InfoContainer,
  UserGroupStyled,
} from './styles'
import avatarTeste from '../../../../assets/avatar-teste.svg'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from
  '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <Container>
      <img src={avatarTeste} alt="" />
      <InfoContainer>
        <HeaderProfile>
          <h1>Cameron Williamson</h1>
          <span>GITHUB<ArrowUpStyled icon={faArrowUpRightFromSquare} /></span>
        </HeaderProfile>
        <BioContainer>
          <span>
            Tristique volutpat pulvinar vel massa,
            pellentesque egestas. Eu viverra massa
            quam dignissim aenean malesuada suscipit.
            Nunc, volutpat pulvinar vel mass.
          </span>
        </BioContainer>
        <FooterContainer>
          <div>
            <GitHubStyled icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <BuildingStyled icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <UserGroupStyled icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </FooterContainer>
      </InfoContainer>
    </Container>
  )
}
