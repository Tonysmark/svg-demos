const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext);

try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    importAll(require.context('./assets/', true, /\.svg$/));
    // require 是webpack的方法
} catch (error) {
    console.log('error : ', error);
}
