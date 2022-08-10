import Aside from "../Aside";
import Content from "../MainContent";
import Header from "../MainHeader";
import { LayoutContainer } from "./style";
import { IChildren } from './../../types/index';




export default function Layout(props: IChildren) {
    return (
        <LayoutContainer>
          <Header/>
          <Aside/>
          <Content>
            {props.children}
          </Content>
        </LayoutContainer>
    );
}