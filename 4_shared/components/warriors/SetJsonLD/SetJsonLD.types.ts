import type { Graph, Thing, WithContext } from "schema-dts";

export type SetJsonLDProps = {
    schemas: Array<WithContext<Thing> | Graph>;
};
