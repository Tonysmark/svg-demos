module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        'babel-plugin-styled-components',
        '@babel/plugin-transform-runtime',
        process.env.BUILD_ENV === 'local' && require.resolve('react-refresh/babel'),
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        '@babel/plugin-proposal-class-properties',
        [
            'import',
            {
                libraryName: 'antd-mobile-v2',
                style: true,
            },
            'antd-v2'
        ],
        [
            'import',
            {
                libraryName: 'antd-mobile',
                "libraryDirectory": "es/components",
                "style": false
            },
            'antd-v5'
        ],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-proposal-json-strings',
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',
    ].filter(Boolean),
    ignore: ['jquery.js', 'react.js', 'iscroll-probe.js', './src/common/Util/library/*.js'],
};
