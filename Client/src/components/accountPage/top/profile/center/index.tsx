import {
    Balance,
    Frame24,
    Supernico,
    Eth,
    Introduction,
    TagLevel,
    Lv1,
    Frame23,
    SelectTitle,
    Frame22,
    Group21,
    Frame21_0002,
    Followers,
    FollowersNum,
    Frame22_0001,
    Following,
    Group24,
    Group23,
    WalletAccount,
    WalletIcon,
    CopyIcon,
    CopyBox,
    ArrowDownIcon,
} from "src/components/accountPage/top/profile/center/CenterSection.styled";

const CenterSection = () => {
    return (
        <>
            <Supernico>Supernico</Supernico>
            <TagLevel>
                <Lv1>Lv.1</Lv1>
            </TagLevel>
            <Group24>
                <WalletIcon src="src/assets/accountPage/mdi_wallet.svg" />
                <Group23>
                    <WalletAccount>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</WalletAccount>
                </Group23>
                <CopyBox>
                    <CopyIcon src="src/assets/accountPage/ph_copy.svg" />
                </CopyBox>
            </Group24>
            <Frame23>
                <SelectTitle>What do you want to be called?</SelectTitle>
                <ArrowDownIcon src="src/assets/accountPage/arrow_down.svg" />
            </Frame23>
            <Frame24>
                <Balance>Balance</Balance>
                <Eth>20,000 ETH</Eth>
            </Frame24>
            <Frame22>
                <Group21>
                    <Frame21_0002>
                        <Followers>Followers</Followers>
                        <FollowersNum>246</FollowersNum>
                    </Frame21_0002>
                    <Frame22_0001>
                        <Following>Following</Following>
                        <FollowersNum>178</FollowersNum>
                    </Frame22_0001>
                </Group21>
            </Frame22>
            <Introduction>
                Hello, My name is Super nico, I’m a newbie on Nearchain, idkfkdkfk
                <br />
                Hello, My name is Super nico, I’m a newbie on Nearchain, iHello, My
                <br />
                name is Super nico, I’m a newbie on Nearchain, i...Hello this ia
            </Introduction>
        </>
    );
};

export default CenterSection;