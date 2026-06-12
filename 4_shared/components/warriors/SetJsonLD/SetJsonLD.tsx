import { SetJsonLDProps } from './SetJsonLD.types';

const SetJsonLD = ({ schemas }: SetJsonLDProps) => {

    return schemas.map((item, key) => (
        <script key={key} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
    ));
};

export default SetJsonLD;
