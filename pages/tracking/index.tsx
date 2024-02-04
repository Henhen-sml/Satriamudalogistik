import styled from "styled-components"
import AutofitGrid from "components/AutofitGrid"
import BasicCardNoImg from "components/BasicCardNoImg"
import Page from "components/Page"


export default function Tracking() {
    return(
        <Page
        title="Lacak Pengiriman"
        description="Masukan Nomor Resi mu"
        >
            <Wrapper>
                <AutofitGrid>
                </AutofitGrid>
            </Wrapper>
        </Page>
    )
}


const Wrapper = styled.div`

`