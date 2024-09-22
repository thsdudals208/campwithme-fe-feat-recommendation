/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack 설정 추가
  webpack(config) {
    // .svg 파일을 React 컴포넌트로 사용하기 위한 설정
    config.module.rules.push({
      test: /\.svg$/, // .svg 파일에 대한 처리 규칙
      use: ["@svgr/webpack"], // @svgr/webpack을 사용하여 SVG를 React 컴포넌트로 변환
    })

    return config // 수정된 Webpack 설정 반환
  },
}

export default nextConfig
