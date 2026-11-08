import RouteMetadataLayout, { createRouteMetadataGenerator } from '@/lib/routeMetadata';

export default RouteMetadataLayout;

export const generateMetadata = createRouteMetadataGenerator('before-after');
