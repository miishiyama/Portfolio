import "./Profile.css";
import Photo from "../../assets/photo.png";

export default function Profile() {
    return (
        <section class="profile-section">
            <div class="profile-div">
                <img class="profile-img" src={Photo} />
                <h1 class="profile-h1">
                    <a class="profile-a" href="">João Inácio Neto</a>
                </h1>
                <p class="profile-p">Full Stack Developer</p>
            </div>
        </section>
    )
}