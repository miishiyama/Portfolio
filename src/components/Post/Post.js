import "./Post.css"

import Photo from "../../assets/photo.png"

export default function Post() {
    return (
        <section class="post-section">
            <div class="post-div">
                <img class="post-img" src={ Photo } />
                <div class="post-div2">
                    <h2 class="post-h2">
                        <a class="post-a" href="">
                            Erro adb devices no Genymotion e Android Studio &#40;React Native&#41;
                        </a>
                    </h2>
                    <p class="post-p">
                        2 anos atrás
                    </p>
                </div>
                <div class="post-div3">
                    <p2 class="post-p2">
                        Erro adb devices no Genymotion e Android Studio &#40;React Native&#41;
                    </p2>
                    <div class="post-div4">
                        <ul class="post-ul">
                            <li class="post-li">
                                <a class="post-a2" href="">
                                    #react-native
                                </a>
                            </li>
                            <li class="post-li">
                                <a class="post-a2" href="">
                                    #genimotion
                                </a>
                            </li>
                            <li class="post-li">
                                <a class="post-a2" href="">
                                    #genimotion
                                </a>
                            </li>
                            <li class="post-li">
                                <a class="post-a2" href="">
                                    #genimotion
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}