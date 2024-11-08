export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	redirect?: string;
	// component?: React.ReactNode;
	element?: any;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
