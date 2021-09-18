module.exports = {
    packagerConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "jak_desktop_app",
            },
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin", "linux", "windows"],
        },
        {
            name: "@electron-forge/maker-deb",
            config: {},
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {},
        },
    ],
};
