import React from 'react';
import { styled } from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';
import ToyotimesLogo from './../../images/toyotimes.png';

const FooterSNS = styled.div`
    dt {
        margin-bottom: 1.5rem;
        font-size: 1rem;
        font-weight: 900;
    }
`;

const SnsContainer = styled.ul`
    display: flex;
`;

const SnsItem = styled.li`
    padding: 0.25rem;
    margin: 0.25rem;
`;

const Svg = styled.svg`
    width: 22.5px;
    height: 22.5px;
`;

const ToyoTimes = styled.img`
    background-color: var(--bg-100);
    width: 100px;
    height: 32px;
    margin: 1rem 0 1rem 0.25rem;
    padding-left: 0.25rem;
`;

const FooterSubscribe = styled.div`
    margin-top: 1rem;
    margin-left: 0.25rem;
    padding-left: 0.25rem;
    dt {
        font-weight: 900;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    dd {
        a {
            cursor: pointer;
            font-size: 1rem;
            font-weight: 900;
            display: flex;
            align-items: center;
            span:first-child {
                margin-right: 1rem;
            }
        }
    }
`;

export default function FooterContact() {
    return (
        <div>
            <div>
                <FooterSNS>
                    <dl>
                        <dt>公式SNS</dt>
                        <dd>
                            <SnsContainer>
                                <SnsItem>
                                    <a
                                        href="https://line.me/R/ti/p/@toyota?from=page&openQrModal=true&searchId=toyota"
                                        target="blank"
                                    >
                                        <span>
                                            <Svg
                                                class="global-footer__icon-button-svg global-footer__icon-button-svg--line"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.2766 0.570312H5.72512C2.87928 0.570312 0.572266 2.87733 0.572266 5.72317V18.2746C0.572266 21.1204 2.87928 23.4275 5.72512 23.4275H18.2766C21.1224 23.4275 23.4294 21.1204 23.4294 18.2746V5.72317C23.4294 2.87733 21.1224 0.570312 18.2766 0.570312Z"
                                                    fill="#06C755"
                                                ></path>
                                                <path
                                                    d="M19.6203 10.9187C19.6203 7.50866 16.2018 4.73438 11.9996 4.73438C7.79748 4.73438 4.37891 7.50866 4.37891 10.9187C4.37891 13.9758 7.09033 16.5358 10.7525 17.0201C11.0003 17.0737 11.3382 17.1837 11.4239 17.3958C11.501 17.5887 11.4739 17.8901 11.4489 18.0851C11.4489 18.0851 11.3596 18.6229 11.3403 18.7372C11.3068 18.9301 11.1875 19.4908 12.0003 19.1479C12.8139 18.8051 16.3889 16.5637 17.9875 14.7237C19.0918 13.5122 19.621 12.2837 19.621 10.9187H19.6203Z"
                                                    fill="white"
                                                ></path>
                                                <path
                                                    d="M17.0853 12.8906H14.9445C14.8638 12.8906 14.7988 12.8256 14.7988 12.7449V12.7427V9.42272V9.41915C14.7988 9.33844 14.8638 9.27344 14.9445 9.27344H17.0853C17.1653 9.27344 17.231 9.33915 17.231 9.41915V9.95987C17.231 10.0406 17.166 10.1056 17.0853 10.1056H15.6303V10.667H17.0853C17.1653 10.667 17.231 10.7327 17.231 10.8127V11.3534C17.231 11.4342 17.166 11.4992 17.0853 11.4992H15.6303V12.0606H17.0853C17.1653 12.0606 17.231 12.1263 17.231 12.2063V12.747C17.231 12.8277 17.166 12.8927 17.0853 12.8927V12.8906Z"
                                                    fill="#06C755"
                                                ></path>
                                                <path
                                                    d="M9.16605 12.8913C9.24605 12.8913 9.31176 12.8263 9.31176 12.7456V12.2049C9.31176 12.1249 9.24605 12.0592 9.16605 12.0592H7.71105V9.41915C7.71105 9.33915 7.64533 9.27344 7.56533 9.27344H7.02462C6.94391 9.27344 6.87891 9.33844 6.87891 9.41915V12.7427V12.7456C6.87891 12.8263 6.94391 12.8913 7.02462 12.8913H9.16533H9.16605Z"
                                                    fill="#06C755"
                                                ></path>
                                                <path
                                                    d="M10.4552 9.27344H9.91525C9.83477 9.27344 9.76953 9.33868 9.76953 9.41915V12.7449C9.76953 12.8253 9.83477 12.8906 9.91525 12.8906H10.4552C10.5357 12.8906 10.601 12.8253 10.601 12.7449V9.41915C10.601 9.33868 10.5357 9.27344 10.4552 9.27344Z"
                                                    fill="#06C755"
                                                ></path>
                                                <path
                                                    d="M14.1347 9.27344H13.594C13.5132 9.27344 13.4482 9.33844 13.4482 9.41915V11.3942L11.9268 9.33915C11.9232 9.33415 11.919 9.32915 11.9154 9.32415C11.9154 9.32415 11.9154 9.32415 11.9147 9.32344C11.9118 9.32058 11.909 9.31701 11.9061 9.31415C11.9054 9.31344 11.904 9.31272 11.9032 9.31201C11.9004 9.30987 11.8982 9.30772 11.8954 9.30558C11.894 9.30487 11.8925 9.30344 11.8911 9.30272C11.889 9.30058 11.8861 9.29915 11.8832 9.29772C11.8818 9.29701 11.8804 9.29558 11.879 9.29487C11.8761 9.29344 11.874 9.29201 11.8711 9.29058C11.8697 9.28987 11.8682 9.28915 11.8668 9.28844C11.864 9.28701 11.8611 9.28558 11.8582 9.28487C11.8568 9.28487 11.8554 9.28344 11.8532 9.28344C11.8504 9.28272 11.8475 9.28129 11.8447 9.28058C11.8432 9.28058 11.8411 9.27987 11.8397 9.27915C11.8368 9.27915 11.834 9.27772 11.8311 9.27701C11.829 9.27701 11.8268 9.27701 11.8247 9.27629C11.8218 9.27629 11.8197 9.27558 11.8168 9.27558C11.814 9.27558 11.8118 9.27558 11.809 9.27558C11.8075 9.27558 11.8054 9.27558 11.804 9.27558H11.2668C11.1868 9.27558 11.1211 9.34058 11.1211 9.42129V12.747C11.1211 12.827 11.1861 12.8927 11.2668 12.8927H11.8075C11.8882 12.8927 11.9532 12.8277 11.9532 12.747V10.772L13.4768 12.8299C13.4875 12.8449 13.5004 12.857 13.5147 12.8663C13.5147 12.8663 13.5161 12.867 13.5161 12.8677C13.519 12.8699 13.5218 12.8713 13.5254 12.8734C13.5268 12.8742 13.5282 12.8749 13.5297 12.8756C13.5318 12.877 13.5347 12.8777 13.5368 12.8792C13.539 12.8806 13.5418 12.8813 13.544 12.882C13.5454 12.882 13.5468 12.8834 13.5482 12.8834C13.5518 12.8849 13.5547 12.8856 13.5582 12.8863C13.5582 12.8863 13.5597 12.8863 13.5604 12.8863C13.5725 12.8892 13.5854 12.8913 13.5982 12.8913H14.1354C14.2154 12.8913 14.2811 12.8263 14.2811 12.7456V9.41987C14.2811 9.33987 14.2161 9.27415 14.1354 9.27415L14.1347 9.27344Z"
                                                    fill="#06C755"
                                                ></path>
                                            </Svg>
                                        </span>
                                    </a>
                                </SnsItem>
                                <SnsItem>
                                    <a
                                        href="https://twitter.com/i/flow/login?redirect_after_login=%2FTOYOTA_PR%2F"
                                        target="blank"
                                    >
                                        <span>
                                            <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                            >
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </Svg>
                                        </span>
                                    </a>
                                </SnsItem>
                                <SnsItem>
                                    <a
                                        href="https://www.facebook.com/ToyotaMotorCorporation/"
                                        target="blank"
                                    >
                                        <span>
                                            <Svg
                                                class="global-footer__icon-button-svg global-footer__icon-button-svg--facebook"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23.4294 11.9989C23.4294 5.68705 18.3127 0.570312 12.0008 0.570312C5.68901 0.570312 0.572266 5.68705 0.572266 11.9989C0.572266 17.7031 4.75151 22.4312 10.2151 23.2886V15.3025H7.31334V11.9989H10.2151V9.48103C10.2151 6.61674 11.9214 5.0346 14.5319 5.0346C15.7823 5.0346 17.0901 5.25781 17.0901 5.25781V8.07031H15.6491C14.2294 8.07031 13.7866 8.95134 13.7866 9.85513V11.9989H16.9562L16.4495 15.3025H13.7866V23.2886C19.2502 22.4312 23.4294 17.7033 23.4294 11.9989Z"
                                                    fill="#1877F2"
                                                ></path>
                                                <path
                                                    d="M16.4487 15.2991L16.9554 11.9955H13.7857V9.85179C13.7857 8.94799 14.2286 8.06696 15.6482 8.06696H17.0893V5.25446C17.0893 5.25446 15.7815 5.03125 14.531 5.03125C11.9205 5.03125 10.2143 6.61339 10.2143 9.47768V11.9955H7.3125V15.2991H10.2143V23.2853C10.7962 23.3766 11.3924 23.4241 12 23.4241C12.6076 23.4241 13.2038 23.3766 13.7857 23.2853V15.2991H16.4487Z"
                                                    fill="white"
                                                ></path>
                                            </Svg>
                                        </span>
                                    </a>
                                </SnsItem>
                                <SnsItem>
                                    <a
                                        href="https://www.youtube.com/user/toyotajpchannel/"
                                        target="blank"
                                    >
                                        <span>
                                            <Svg
                                                class="global-footer__icon-button-svg global-footer__icon-button-svg--youtube"
                                                viewBox="0 0 28 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M26.583 3.78754C26.2734 2.63128 25.3648 1.72263 24.2085 1.41311C22.1127 0.851562 13.7137 0.851562 13.7137 0.851562C13.7137 0.851562 5.31479 0.851562 3.22114 1.41311C2.06487 1.72263 1.15622 2.63128 0.846707 3.78754C0.285156 5.8812 0.285156 10.252 0.285156 10.252C0.285156 10.252 0.285156 14.6228 0.846707 16.7165C1.15622 17.8727 2.06487 18.7814 3.22114 19.0909C5.31479 19.6525 13.7137 19.6525 13.7137 19.6525C13.7137 19.6525 22.1127 19.6525 24.2063 19.0909C25.3626 18.7814 26.2712 17.8727 26.5807 16.7165C27.1423 14.6228 27.1423 10.252 27.1423 10.252C27.1423 10.252 27.1423 5.8812 26.5807 3.78754H26.583Z"
                                                    fill="#FF0000"
                                                ></path>
                                                <path
                                                    d="M11.0273 14.275L18.0069 10.2469L11.0273 6.21875V14.275Z"
                                                    fill="white"
                                                ></path>
                                            </Svg>
                                        </span>
                                    </a>
                                </SnsItem>
                                <SnsItem>
                                    <a
                                        href="https://www.instagram.com/toyota_jp/"
                                        target="blank"
                                    >
                                        <span>
                                            <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                id="instagram"
                                            >
                                                <linearGradient
                                                    id="a"
                                                    x1="1.464"
                                                    x2="14.536"
                                                    y1="14.536"
                                                    y2="1.464"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stop-color="#FFC107"
                                                    ></stop>
                                                    <stop
                                                        offset=".507"
                                                        stop-color="#F44336"
                                                    ></stop>
                                                    <stop
                                                        offset=".99"
                                                        stop-color="#9C27B0"
                                                    ></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#a)"
                                                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                                                ></path>
                                                <linearGradient
                                                    id="b"
                                                    x1="5.172"
                                                    x2="10.828"
                                                    y1="10.828"
                                                    y2="5.172"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stop-color="#FFC107"
                                                    ></stop>
                                                    <stop
                                                        offset=".507"
                                                        stop-color="#F44336"
                                                    ></stop>
                                                    <stop
                                                        offset=".99"
                                                        stop-color="#9C27B0"
                                                    ></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#b)"
                                                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                                                ></path>
                                                <linearGradient
                                                    id="c"
                                                    x1="11.923"
                                                    x2="12.677"
                                                    y1="4.077"
                                                    y2="3.323"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stop-color="#FFC107"
                                                    ></stop>
                                                    <stop
                                                        offset=".507"
                                                        stop-color="#F44336"
                                                    ></stop>
                                                    <stop
                                                        offset=".99"
                                                        stop-color="#9C27B0"
                                                    ></stop>
                                                </linearGradient>
                                                <circle
                                                    cx="12.3"
                                                    cy="3.7"
                                                    r=".533"
                                                    fill="url(#c)"
                                                ></circle>
                                            </Svg>
                                        </span>
                                    </a>
                                </SnsItem>
                            </SnsContainer>
                        </dd>
                    </dl>
                    <div>
                        <a
                            href="https://toyotatimes.jp/?padid=from_tjptop_footer_toyotaimes_logo&_ga=2.50263265.613655581.1698571182-286818589.1698218336&_gl=1*1wcfw3q*_ga*Mjg2ODE4NTg5LjE2OTgyMTgzMzY.*_ga_BLSGKL3LFQ*MTY5OTI1NDUxNy4xNC4wLjE2OTkyNTQ1NDYuMzEuMC4w*_fplc*JTJCazZqZ25NS25XU3d0aG9PUFFvcTVpZWV1MmpoRHolMkJ3QkZmdG9hdjglMkJ2dWduJTJGSlBDSDVaZ085UHNhc09NTzV3SWYwbHhNYWJNdktPJTJGQkpJZHVTa2Z4ZGZlRkoxd2pnQ2thMlBjMnUxaUdJWU5YOEVQMXBqT2pBZU41RnpEQSUzRCUzRA.."
                            target="blank"
                        >
                            <span>
                                <ToyoTimes
                                    src={ToyotimesLogo}
                                    alt="toyotimes logo"
                                />
                            </span>
                        </a>
                    </div>
                </FooterSNS>
                <FooterSubscribe>
                    <dl>
                        <dt>TOYOTA Mail Magazine</dt>
                        <dd>
                            <a
                                href="https://toyota.jp/register_submitmail.html?padid=from_tjptop_footer_mail"
                                target="blank"
                            >
                                <span>登録はこちら</span>
                                <span>
                                    <BsChevronRight />
                                </span>
                            </a>
                        </dd>
                    </dl>
                </FooterSubscribe>
            </div>
        </div>
    );
}
