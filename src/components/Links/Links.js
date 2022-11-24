import "./Links.css";
import MapPin from "../../assets/map-pin.svg";
import Briefcase from "../../assets/briefcase.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Globe from "../../assets/globe.svg";
import Mail from "../../assets/mail.svg";

export default function Links() {
    return (
        <section class="links-section">
            <div class="links-div">
                <ul class="links-ul">
                    <li class="links-li">
                        <img class="links-img" src={MapPin} />
                        <p class="links-p">
                            <a class="links-a" href="">Brasil</a>
                        </p>
                    </li>
                    <li class="links-li">
                        <img class="links-img" src={Briefcase} />
                        <p class="links-p">
                            <a class="links-a" href="">Rocketseat</a>
                        </p>
                    </li>
                    <li class="links-li">
                        <img class="links-img" src={Github} />
                        <p class="links-p">
                            <a class="links-a" href="">birobirobiro</a>
                        </p>
                    </li>
                    <li class="links-li">
                        <img class="links-img" src={Linkedin} />
                        <p class="links-p">
                            <a class="links-a" href="">joao-inacio-neto</a>
                        </p>
                    </li>
                    <li class="links-li">
                        <img class="links-img" src={Twitter} />
                        <p class="links-p">
                            <a class="links-a" href="">birobirobiro</a>
                        </p>
                    </li>
                    <li class="links-li">
                        <img class="links-img" src={Globe} />
                        <p class="links-p">
                            <a class="links-a" href="">https://birobirobiro.dev</a>
                        </p>
                    </li>
                    <li class="links-li">
                        <img class="links-img" src={Mail} />
                        <p class="links-p">
                            <a class="links-a" href="">birobirobiro.dev@gmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}