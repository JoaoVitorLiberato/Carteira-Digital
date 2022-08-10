import { ContentStyled } from "./style";
import { IChildren } from "../../types";

export default function Content(props: IChildren) {
    return (
        <ContentStyled>
           {props.children}
        </ContentStyled>
    );
}