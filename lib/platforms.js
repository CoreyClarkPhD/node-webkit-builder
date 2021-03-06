module.exports = {
    win32: {
        needsZip: true,
        runable: 'nw.exe',
        files: { // First file must be the executable
            '<=0.9.2': ['nw.exe', 'ffmpegsumo.dll', 'icudt.dll', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak'],
            '>0.9.2': ['nw.exe', 'ffmpegsumo.dll', 'icudtl.dat', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak', 'locales']
        },
        versionNameTemplate: 'v${ version }/nwjs-v${ version }-win-ia32.zip'
    },
    win64: {
        needsZip: true,
        runable: 'nw.exe',
        files: { // First file must be the executable
            '<=0.9.2': ['nw.exe', 'ffmpegsumo.dll', 'icudt.dll', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak', 'locales'],
            '>0.9.2': ['nw.exe', 'ffmpegsumo.dll', 'icudtl.dat', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak', 'locales']
        },
        versionNameTemplate: 'v${ version }/nwjs-v${ version }-win-x64.zip'
    },
    osx32: {
        runable: 'nwjs.app/Contents/MacOS/nwjs',
        files: {
            '*': ['nwjs.app']
        },
        versionNameTemplate: 'v${ version }/nwjs-v${ version }-osx-ia32.zip'
    },
    osx64: {
        runable: 'nwjs.app/Contents/MacOS/nwjs',
        files: {
            '*': ['nwjs.app']
        },
        versionNameTemplate: 'v${ version }/nwjs-v${ version }-osx-x64.zip'
    },
    linux32: {
        needsZip: true,
        chmod: '0755',
        runable: 'nw',
        files: { // First file must be the executable
            '<=0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so'],
            '>0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so', 'icudtl.dat']
        },
        versionNameTemplate: 'v${ version }/nwjs-v${ version }-linux-ia32.tar.gz'
    },
    linux64: {
        needsZip: true,
        chmod: '0755', // chmod file file to be executable
        runable: 'nw',
        files: { // First file must be the executable
            '<=0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so'],
            '>0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so', 'icudtl.dat']
        },
        versionNameTemplate: 'v${ version }/nwjs-v${ version }-linux-x64.tar.gz'
    }
};
