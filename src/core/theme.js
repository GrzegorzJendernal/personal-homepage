const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mercury: "#E5E5E5",
    iron: "rgba(209, 213, 218, 0.3)",
    slateGray: "#6E7E91",
    anakiwa: "#8CC2FF",
    scienceBlue: "#0366D6",
    blue: "#2517EB",
    mineShaft: "#363636",
    blackText: "#252525",
}

export const theme = {
    colors: {
        background: colorNames.whiteLilac,
        button: {
            background: colorNames.scienceBlue,
            border: colorNames.iron,
            text: colorNames.white,
        },
        footerText: colorNames.blackText,
        section: {
            header: colorNames.blackText,
            background: colorNames.white,
            divider: colorNames.mercury,
            text: colorNames.slateGray,
            point: colorNames.scienceBlue,
        },
        errorPage: colorNames.blackText,
        loader: colorNames.scienceBlue,
        themeButton: {
            sun: colorNames.white,
            circleBackground: colorNames.slateGray,
            border: colorNames.slateGray,
            text: colorNames.slateGray,
        },
        header: {
            caption: colorNames.slateGray,
            name: colorNames.blackText,
            text: colorNames.slateGray,
        },
        contact: {
            invitation: colorNames.slateGray,
            email: colorNames.blackText,
            emailHover: colorNames.scienceBlue,
        },
        portfolio: {
            logo: colorNames.scienceBlue,
            title: colorNames.blackText,
            tileBackground: colorNames.white,
            border: colorNames.iron,
            borderHover: colorNames.anakiwa,
            repoName: colorNames.scienceBlue,
            text: colorNames.slateGray,
            link: colorNames.scienceBlue,
            linkHover: colorNames.blue,
        },
        socials: {
            link: colorNames.blackText,
            hover: colorNames.scienceBlue,
        },
    },
    breakpoints: {
        tiny: "467px",
        small: "524px",
        mobile: "767px",
        medium: "991px",
        large: "1081px",
        mediumDesktop: "1440px",
    },
    boxShadow: {
        boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);",
        buttonHover: "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;",
        buttonActive: "inset 0px 2px 0px rgba(20, 70, 32, 0.2)",
    }
};