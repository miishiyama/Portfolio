import "./Project.css"

import Folder from "../../assets/folder.svg"

import Star from "../../assets/star.svg"

import Gitbranch from "../../assets/git-branch.svg"

import Circle from "../../assets/circle.svg"

export default function Project1() {
    return (
        <section class="project-section">
            <div class="project-div">
                <div class="project-div2">
                    <img class="project-img" src={ Folder } />
                    <h3 class="project-h3">
                        <a class="project-a" href="">
                            my-onix
                        </a>
                    </h3>
                </div>
                <p class="project-p">
                    Consulte os códigos de erro que aparecem no painel do veículo Onix.
                </p>
                <div class="project-div3">
                    <div class="project-div4">
                        <img class="project-img2" src={ Star } />
                        <p2 class="project-p2">
                            100
                        </p2>
                        <img class="project-img2" src={ Gitbranch } />
                        <p2 class="project-p2">
                            100
                        </p2>
                    </div>
                    <div class="project-div5">
                        <img class="project-img3" src={ Circle } />
                        <p2 class="project-p2">
                            JavaScript
                        </p2>
                    </div>
                </div>
            </div>
            <div class="project-div">
                <div class="project-div2">
                    <img class="project-img" src={ Folder } />
                    <h3 class="project-h3">
                        <a class="project-a" href="">
                            my-onix
                        </a>
                    </h3>
                </div>
                <p class="project-p">
                    Consulte os códigos de erro que aparecem no painel do veículo Onix.
                </p>
                <div class="project-div3">
                    <div class="project-div4">
                        <img class="project-img2" src={ Star } />
                        <p2 class="project-p2">
                            100
                        </p2>
                        <img class="project-img2" src={ Gitbranch } />
                        <p2 class="project-p2">
                            100
                        </p2>
                    </div>
                    <div class="project-div5">
                        <img class="project-img3" src={ Circle } />
                        <p2 class="project-p2">
                            JavaScript
                        </p2>
                    </div>
                </div>
            </div>
        </section>
    )
}