import ServerComponent, { generateMetadata } from './ServerComponent';

export { generateMetadata };

export default function Page(props) {
  return <ServerComponent {...props} />;
}
