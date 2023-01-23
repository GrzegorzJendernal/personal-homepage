const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mercury: "#E5E5E5",
    iron: "rgba(209, 213, 218, 0.3)",
    slateGray: "#6E7E91",
    shipCove: "#6D93BE",
    anakiwa: "#8CC2FF",
    dodgerBlue: "#2188ff",
    scienceBlue: "#0366d6",
    blue: "#2517EB",
    darkBlue: "rgba(33, 136, 255, 0.4)",
    murkyBlue: "rgba(3, 102, 214, 0.2)",
    parsley: "rgba(20, 70, 32, 0.2)",
    mineShaft: "rgb(54, 54, 54)",
    semiDark: "rgba(54, 54, 54, 0.72)",
    blackText: "#252525",
};

const common = {
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
    },
    transition: {
        time: "0.4s",
    },

};

export const themeLight = {
    ...common,
    colors: {
        background: colorNames.whiteLilac,
        button: {
            active: colorNames.parsley,
            background: colorNames.scienceBlue,
            border: colorNames.iron,
            hover: colorNames.anakiwa,
            text: colorNames.white,
        },
        contact: {
            email: colorNames.blackText,
            emailHover: colorNames.scienceBlue,
            invitation: colorNames.slateGray,
        },
        descriptionText: colorNames.blackText,
        errorPage: colorNames.blackText,
        footerText: colorNames.blackText,
        header: {
            caption: colorNames.slateGray,
            name: colorNames.blackText,
            text: colorNames.slateGray,
        },
        loader: colorNames.scienceBlue,
        portfolio: {
            border: colorNames.iron,
            borderHover: colorNames.anakiwa,
            link: colorNames.scienceBlue,
            linkUnderline: colorNames.murkyBlue,
            logo: colorNames.scienceBlue,
            repoName: colorNames.scienceBlue,
            text: colorNames.slateGray,
            title: colorNames.blackText,
            tileBackground: colorNames.white,
        },
        section: {
            background: colorNames.white,
            divider: colorNames.mercury,
            header: colorNames.blackText,
            point: colorNames.scienceBlue,
            text: colorNames.slateGray,
        },
        socials: {
            link: colorNames.blackText,
            hover: colorNames.scienceBlue,
        },
        themeButton: {
            background: colorNames.mercury,
            border: colorNames.slateGray,
            circleBackground: colorNames.slateGray,
            sun: colorNames.white,
            text: colorNames.slateGray,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        background: colorNames.blackText,
        button: {
            active: colorNames.parsley,
            background: colorNames.dodgerBlue,
            border: colorNames.iron,
            hover: colorNames.shipCove,
            text: colorNames.white,
        },
        contact: {
            email: colorNames.white,
            emailHover: colorNames.dodgerBlue,
            invitation: colorNames.white,
        },
        descriptionText: colorNames.white,
        errorPage: colorNames.white,
        footerText: colorNames.white,
        header: {
            caption: colorNames.white,
            name: colorNames.white,
            text: colorNames.white,
        },
        loader: colorNames.dodgerBlue,
        portfolio: {
            border: colorNames.iron,
            borderHover: colorNames.scienceBlue,
            link: colorNames.dodgerBlue,
            linkUnderline: colorNames.darkBlue,
            logo: colorNames.dodgerBlue,
            repoName: colorNames.white,
            text: colorNames.white,
            title: colorNames.white,
            tileBackground: colorNames.semiDark,
        },
        section: {
            background: colorNames.mineShaft,
            divider: colorNames.white,
            header: colorNames.white,
            point: colorNames.dodgerBlue,
            text: colorNames.white,
        },
        socials: {
            link: colorNames.white,
            hover: colorNames.dodgerBlue,
        },
        themeButton: {
            background: colorNames.semiDark,
            border: colorNames.white,
            circleBackground: colorNames.white,
            sun: colorNames.blackText,
            text: colorNames.white,
        },
    },
};