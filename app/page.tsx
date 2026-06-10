import { CBurgerIcon } from "@icons/CBurgerIcon";
import styles from "./page.module.scss";
export default function Home() {
    return (
        <div>
            <p className="font-bold">Болд</p>
            <p className="font-semibold">Семиболд</p>
            <p className="font-regular">Регуляр</p>
            <p className="font-light">Легкий</p>

            <button>
                <CBurgerIcon />
            </button>
        </div>
    );
}
