import Bowser from "bowser";

const parser = Bowser.getParser(window.navigator.userAgent);

export const isMobile = () => {
  console.log(parser.getResult());
  // const isApple = parser.getResult().platform.vendor === 'Apple'
  return parser.getPlatformType() === "mobile";
};

export default function bowser(): Bowser.Parser.ParsedResult {
  return Bowser.getParser(window.navigator.userAgent).getResult();
}
