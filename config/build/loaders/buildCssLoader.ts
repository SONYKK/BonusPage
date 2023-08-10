import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader() {
    return {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
    };
}
