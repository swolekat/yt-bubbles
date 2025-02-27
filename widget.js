// Chat badge images
const ytSubscriberBadge = 'https://cdn.streamelements.com/uploads/e0ba34b9-d8fd-48d5-88ba-ab95e189064e.png';
const ytVerifiedBadge = 'https://cdn.streamelements.com/uploads/b7a2bd4e-d6ab-4126-9b4e-d8f4c6ea91a1.png';
const ytModBadge = 'https://cdn.streamelements.com/uploads/3f6a89a1-b37a-49d4-bd02-aad6e4c1b934.png';
const ytBroadcasterBadge = 'https://cdn.streamelements.com/uploads/81ff9cb0-2198-46fd-b54f-f03ac9db26b4.png';

// Membership colour
const membershipColor = '#447821';

// Custom colours for Super Chat tiers
const tierToColorMap = {
    1: '#134A9E',
    2: '#4476FF',
    3: '#00AE7D',
    4: '#D3B300',
    5: '#F37C22',
    6: '#E62565',
    7: '#E32524',
};

// Custom channel emoji
const ytEmotes = {
    // EXAMPLE ENTRY:
    // ':_emojiName:': 'https://yt3.ggpht.com/IMAGE_ID_GOES_HERE=w500-500-c-k-nd',
    ':_tclDed:': 'https://yt3.ggpht.com/GPHoYCSnJnP5T3s7BOaWJ2JWicRekevPIMh8D9vDLYfu-bbT9PGtsIY7ZhOQl82n7cyyooyuQFw=w500-h500-c-k-nd',
    ':_tclFinland:': 'https://yt3.ggpht.com/cmRVrPZUBx2Kk3_npN0FuMr3TzJo9uYrC6GnGSP02cxVtyliJbuxiyFGys-T6tAuq8viXAxY=w500-h500-c-k-nd',
    ':_tclTrolled:': 'https://yt3.ggpht.com/lZMNvYcZBzPNwgN0SSeFSoliqlq-kfb2TSiVFu3oPTe9peu3GhbHeYdGxsI4VvWOSJqaRUaIITo=w500-h500-c-k-nd',
    ':_tclPog:': 'https://yt3.ggpht.com/grM5RsK7WYrrGKzY2i2Cp_vwwjIXFjEEylN0bFa6O1-7dcckJxOY34OnKJMfiAwPn7AeaiAb1A=w500-h500-c-k-nd',
    ':_tclAAAA:': 'https://yt3.ggpht.com/xDF3SU8NXEWgKhGe8Sx_z5028NDqvmqspPWFVwZMaB2wu1gAVb6SwuG0U0DWzIME5YWRG-PP=w500-h500-c-k-nd',
    ':_tclBunkisser:': 'https://yt3.ggpht.com/Ht5ETfdg2uLvL7odEulCsxa-kgZfQIHD1TpYxmHxSmBiwMJKKlBJxZmXLaaR6DI5e-eDBcJnOg=w500-h500-c-k-nd',
    ':_tclItsfine:': 'https://yt3.ggpht.com/tHTbAQjzXQbOJFxcF-oAPAsTbMiNSnohxUBn9xiLsMcmXQpnJ0R5iN64rwh8BshR2U3nekVmfQ=w500-h500-c-k-nd',
    ':_tclThisisfine:': 'https://yt3.ggpht.com/ZrPK7hRYKuH5MrmuvSCISbbMEKQDt6rS6VDSPCTW4b1pspIe6qn3WtJRfjBntOUimqcZmG50uA=w500-h500-c-k-nd',
    ':_tclYouwhat:': 'https://yt3.ggpht.com/GK5rv_iWe2hs5HMd-B2uBv-IJIaWBMfG5GFtwJhpbeDZv8yyr2hR4juztQ1jTxcJCTMUrLuE=w500-h500-c-k-nd',
    ':_tclDeletthis:': 'https://yt3.ggpht.com/lzigH-ErN0co9uRWTig9xfkH6PG7dX_qo2PZRxpk3Ng6v3_vasPNiiGn2j1YpRrotFA4f9ejJQ=w500-h500-c-k-nd',

    // standard YouTube emotes
    ":hand-pink-waving:": "https://yt3.ggpht.com/KOxdr_z3A5h1Gb7kqnxqOCnbZrBmxI2B_tRQ453BhTWUhYAlpg5ZP8IKEBkcvRoY8grY91Q=w500-h500-c-k-nd",
    ":face-blue-smiling:": "https://yt3.ggpht.com/cktIaPxFwnrPwn-alHvnvedHLUJwbHi8HCK3AgbHpphrMAW99qw0bDfxuZagSY5ieE9BBrA=w500-h500-c-k-nd",
    ":face-red-droopy-eyes:": "https://yt3.ggpht.com/oih9s26MOYPWC_uL6tgaeOlXSGBv8MMoDrWzBt-80nEiVSL9nClgnuzUAKqkU9_TWygF6CI=w500-h500-c-k-nd",
    ":face-purple-crying:": "https://yt3.ggpht.com/g6_km98AfdHbN43gvEuNdZ2I07MmzVpArLwEvNBwwPqpZYzszqhRzU_DXALl11TchX5_xFE=w500-h500-c-k-nd",
    ":text-green-game-over:": "https://yt3.ggpht.com/cr36FHhSiMAJUSpO9XzjbOgxhtrdJNTVJUlMJeOOfLOFzKleAKT2SEkZwbqihBqfTXYCIg=w500-h500-c-k-nd",
    ":person-turqouise-waving:": "https://yt3.ggpht.com/uNSzQ2M106OC1L3VGzrOsGNjopboOv-m1bnZKFGuh0DxcceSpYHhYbuyggcgnYyaF3o-AQ=w500-h500-c-k-nd",
    ":face-green-smiling:": "https://yt3.ggpht.com/G061SAfXg2bmG1ZXbJsJzQJpN8qEf_W3f5cb5nwzBYIV58IpPf6H90lElDl85iti3HgoL3o=w500-h500-c-k-nd",
    ":face-orange-frowning:": "https://yt3.ggpht.com/Ar8jaEIxzfiyYmB7ejDOHba2kUMdR37MHn_R39mtxqO5CD4aYGvjDFL22DW_Cka6LKzhGDk=w500-h500-c-k-nd",
    ":eyes-purple-crying:": "https://yt3.ggpht.com/FrYgdeZPpvXs-6Mp305ZiimWJ0wV5bcVZctaUy80mnIdwe-P8HRGYAm0OyBtVx8EB9_Dxkc=w500-h500-c-k-nd",
    ":face-fuchsia-wide-eyes:": "https://yt3.ggpht.com/zdcOC1SMmyXJOAddl9DYeEFN9YYcn5mHemJCdRFQMtDuS0V-IyE-5YjNUL1tduX1zs17tQ=w500-h500-c-k-nd",
    ":cat-orange-whistling:": "https://yt3.ggpht.com/0ocqEmuhrKCK87_J21lBkvjW70wRGC32-Buwk6TP4352CgcNjL6ug8zcsel6JiPbE58xhq5g=w500-h500-c-k-nd",
    ":face-blue-wide-eyes:": "https://yt3.ggpht.com/2Ht4KImoWDlCddiDQVuzSJwpEb59nZJ576ckfaMh57oqz2pUkkgVTXV8osqUOgFHZdUISJM=w500-h500-c-k-nd",
    ":face-orange-raised-eyebrow:": "https://yt3.ggpht.com/JbCfmOgYI-mO17LPw8e_ycqbBGESL8AVP6i7ZsBOVLd3PEpgrfEuJ9rEGpP_unDcqgWSCg=w500-h500-c-k-nd",
    ":face-fuchsia-tongue-out:": "https://yt3.ggpht.com/EURfJZi_heNulV3mfHzXBk8PIs9XmZ9lOOYi5za6wFMCGrps4i2BJX9j-H2gK6LIhW6h7sY=w500-h500-c-k-nd",
    ":face-orange-biting-nails:": "https://yt3.ggpht.com/HmsXEgqUogkQOnL5LP_FdPit9Z909RJxby-uYcPxBLNhaPyqPTcGwvGaGPk2hzB_cC0hs_pV=w500-h500-c-k-nd",
    ":face-red-heart-shape:": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w500-h500-c-k-nd",
    ":face-fuchsia-poop-shape:": "https://yt3.ggpht.com/_xlyzvSimqMzhdhODyqUBLXIGA6F_d5en2bq-AIfc6fc3M7tw2jucuXRIo5igcW3g9VVe3A=w500-h500-c-k-nd",
    ":face-purple-wide-eyes:": "https://yt3.ggpht.com/5RDrtjmzRQKuVYE_FKPUHiGh7TNtX5eSNe6XzcSytMsHirXYKunxpyAsVacTFMg0jmUGhQ=w500-h500-c-k-nd",
    ":glasses-purple-yellow-diamond:": "https://yt3.ggpht.com/EnDBiuksboKsLkxp_CqMWlTcZtlL77QBkbjz_rLedMSDzrHmy_6k44YWFy2rk4I0LG6K2KI=w500-h500-c-k-nd",
    ":face-pink-tears:": "https://yt3.ggpht.com/RL5QHCNcO_Mc98SxFEblXZt9FNoh3bIgsjm0Kj8kmeQJWMeTu7JX_NpICJ6KKwKT0oVHhAA=w500-h500-c-k-nd",
    ":body-blue-raised-arms:": "https://yt3.ggpht.com/2Jds3I9UKOfgjid97b_nlDU4X2t5MgjTof8yseCp7M-6ZhOhRkPGSPfYwmE9HjCibsfA1Uzo=w500-h500-c-k-nd",
    ":hand-orange-covering-eyes:": "https://yt3.ggpht.com/y8ppa6GcJoRUdw7GwmjDmTAnSkeIkUptZMVQuFmFaTlF_CVIL7YP7hH7hd0TJbd8p9w67IM=w500-h500-c-k-nd",
    ":trophy-yellow-smiling:": "https://yt3.ggpht.com/7tf3A_D48gBg9g2N0Rm6HWs2aqzshHU4CuVubTXVxh1BP7YDBRC6pLBoC-ibvr-zCl_Lgg=w500-h500-c-k-nd",
    ":eyes-pink-heart-shape:": "https://yt3.ggpht.com/5vzlCQfQQdzsG7nlQzD8eNjtyLlnATwFwGvrMpC8dgLcosNhWLXu8NN9qIS3HZjJYd872dM=w500-h500-c-k-nd",
    ":face-turquoise-covering-eyes:": "https://yt3.ggpht.com/H2HNPRO8f4SjMmPNh5fl10okSETW7dLTZtuE4jh9D6pSmaUiLfoZJ2oiY-qWU3Owfm1IsXg=w500-h500-c-k-nd",
    ":hand-green-crystal-ball:": "https://yt3.ggpht.com/qZfJrWDEmR03FIak7PMNRNpMjNsCnOzD9PqK8mOpAp4Kacn_uXRNJNb99tE_1uyEbvgJReF2=w500-h500-c-k-nd",
    ":face-turquoise-drinking-coffee:": "https://yt3.ggpht.com/myqoI1MgFUXQr5fuWTC9mz0BCfgf3F8GSDp06o1G7w6pTz48lwARjdG8vj0vMxADvbwA1dA=w500-h500-c-k-nd",
    ":body-green-covering-eyes:": "https://yt3.ggpht.com/UR8ydcU3gz360bzDsprB6d1klFSQyVzgn-Fkgu13dIKPj3iS8OtG1bhBUXPdj9pMwtM00ro=w500-h500-c-k-nd",
    ":goat-turquoise-white-horns:": "https://yt3.ggpht.com/jMnX4lu5GnjBRgiPtX5FwFmEyKTlWFrr5voz-Auko35oP0t3-zhPxR3PQMYa-7KhDeDtrv4=w500-h500-c-k-nd",
    ":hand-purple-blue-peace:": "https://yt3.ggpht.com/-sC8wj6pThd7FNdslEoJlG4nB9SIbrJG3CRGh7-bNV0RVfcrJuwiWHoUZ6UmcVs7sQjxTg4=w500-h500-c-k-nd",
    ":face-blue-question-mark:": "https://yt3.ggpht.com/Wx4PMqTwG3f4gtR7J9Go1s8uozzByGWLSXHzrh3166ixaYRinkH_F05lslfsRUsKRvHXrDk=w500-h500-c-k-nd",
    ":face-blue-covering-eyes:": "https://yt3.ggpht.com/kj3IgbbR6u-mifDkBNWVcdOXC-ut-tiFbDpBMGVeW79c2c54n5vI-HNYCOC6XZ9Bzgupc10=w500-h500-c-k-nd",
    ":face-purple-smiling-fangs:": "https://yt3.ggpht.com/k1vqi6xoHakGUfa0XuZYWHOv035807ARP-ZLwFmA-_NxENJMxsisb-kUgkSr96fj5baBOZE=w500-h500-c-k-nd",
    ":face-purple-sweating:": "https://yt3.ggpht.com/tRnrCQtEKlTM9YLPo0vaxq9mDvlT0mhDld2KI7e_nDRbhta3ULKSoPVHZ1-bNlzQRANmH90=w500-h500-c-k-nd",
    ":face-purple-smiling-tears:": "https://yt3.ggpht.com/MJV1k3J5s0hcUfuo78Y6MKi-apDY5NVDjO9Q7hL8fU4i0cIBgU-cU4rq4sHessJuvuGpDOjJ=w500-h500-c-k-nd",
    ":face-blue-star-eyes:": "https://yt3.ggpht.com/m_ANavMhp6cQ1HzX0HCTgp_er_yO2UA28JPbi-0HElQgnQ4_q5RUhgwueTpH-st8L3MyTA=w500-h500-c-k-nd",
    ":face-blue-heart-eyes:": "https://yt3.ggpht.com/M9tzKd64_r3hvgpTSgca7K3eBlGuyiqdzzhYPp7ullFAHMgeFoNLA0uQ1dGxj3fXgfcHW4w=w500-h500-c-k-nd",
    ":face-blue-three-eyes:": "https://yt3.ggpht.com/nSQHitVplLe5uZC404dyAwv1f58S3PN-U_799fvFzq-6b3bv-MwENO-Zs1qQI4oEXCbOJg=w500-h500-c-k-nd",
    ":face-blue-droopy-eyes:": "https://yt3.ggpht.com/hGPqMUCiXGt6zuX4dHy0HRZtQ-vZmOY8FM7NOHrJTta3UEJksBKjOcoE6ZUAW9sz7gIF_nk=w500-h500-c-k-nd",
    ":planet-orange-purple-ring:": "https://yt3.ggpht.com/xkaLigm3P4_1g4X1JOtkymcC7snuJu_C5YwIFAyQlAXK093X0IUjaSTinMTLKeRZ6280jXg=w500-h500-c-k-nd",
    ":face-turquoise-speaker-shape:": "https://yt3.ggpht.com/WTFFqm70DuMxSC6ezQ5Zs45GaWD85Xwrd9Sullxt54vErPUKb_o0NJQ4kna5m7rvjbRMgr3A=w500-h500-c-k-nd",
    ":octopus-red-waving:": "https://yt3.ggpht.com/L9Wo5tLT_lRQX36iZO_fJqLJR4U74J77tJ6Dg-QmPmSC_zhVQ-NodMRc9T0ozwvRXRaT43o=w500-h500-c-k-nd",
    ":pillow-turquoise-hot-chocolate:": "https://yt3.ggpht.com/cAR4cehRxbn6dPbxKIb-7ShDdWnMxbaBqy2CXzBW4aRL3IqXs3rxG0UdS7IU71OEU7LSd20q=w500-h500-c-k-nd",
    ":hourglass-purple-sand-orange:": "https://yt3.ggpht.com/MFDLjasPt5cuSM_tK5Fnjaz_k08lKHdX_Mf7JkI6awaHriC3rGL7J_wHxyG6PPhJ8CJ6vsQ=w500-h500-c-k-nd",
    ":fish-orange-wide-eyes:": "https://yt3.ggpht.com/iQLKgKs7qL3091VHgVgpaezc62uPewy50G_DoI0dMtVGmQEX5pflZrUxWfYGmRfzfUOOgJs=w500-h500-c-k-nd",
    ":popcorn-yellow-striped-smile:": "https://yt3.ggpht.com/TW_GktV5uVYviPDtkCRCKRDrGlUc3sJ5OHO81uqdMaaHrIQ5-sXXwJfDI3FKPyv4xtGpOlg=w500-h500-c-k-nd",
    ":penguin-blue-waving-tear:": "https://yt3.ggpht.com/p2u7dcfZau4_bMOMtN7Ma8mjHX_43jOjDwITf4U9adT44I-y-PT7ddwPKkfbW6Wx02BTpNoC=w500-h500-c-k-nd",
    ":clock-turquoise-looking-up:": "https://yt3.ggpht.com/tDnDkDZykkJTrsWEJPlRF30rmbek2wcDcAIymruOvSLTsUFIZHoAiYTRe9OtO-80lDfFGvo=w500-h500-c-k-nd",
    ":face-red-smiling-live:": "https://yt3.ggpht.com/14Pb--7rVcqnHvM7UlrYnV9Rm4J-uojX1B1kiXYvv1my-eyu77pIoPR5sH28-eNIFyLaQHs=w500-h500-c-k-nd",
    ":hands-yellow-heart-red:": "https://yt3.ggpht.com/qWSu2zrgOKLKgt_E-XUP9e30aydT5aF3TnNjvfBL55cTu1clP8Eoh5exN3NDPEVPYmasmoA=w500-h500-c-k-nd",
    ":volcano-green-lava-orange:": "https://yt3.ggpht.com/_IWOdMxapt6IBY5Cb6LFVkA3J77dGQ7P2fuvYYv1-ahigpVfBvkubOuGLSCyFJ7jvis-X8I=w500-h500-c-k-nd",
    ":person-turquoise-waving-speech:": "https://yt3.ggpht.com/gafhCE49PH_9q-PuigZaDdU6zOKD6grfwEh1MM7fYVs7smAS_yhYCBipq8gEiW73E0apKTzi=w500-h500-c-k-nd",
    ":face-orange-tv-shape:": "https://yt3.ggpht.com/EVK0ik6dL5mngojX9I9Juw4iFh053emP0wcUjZH0whC_LabPq-DZxN4Jg-tpMcEVfJ0QpcJ4=w500-h500-c-k-nd",
    ":face-blue-spam-shape:": "https://yt3.ggpht.com/hpwvR5UgJtf0bGkUf8Rn-jTlD6DYZ8FPOFY7rhZZL-JHj_7OPDr7XUOesilRPxlf-aW42Zg=w500-h500-c-k-nd",
    ":face-fuchsia-flower-shape:": "https://yt3.ggpht.com/o9kq4LQ0fE_x8yxj29ZeLFZiUFpHpL_k2OivHbjZbttzgQytU49Y8-VRhkOP18jgH1dQNSVz=w500-h500-c-k-nd",
    ":person-blue-holding-pencil:": "https://yt3.ggpht.com/TKgph5IHIHL-A3fgkrGzmiNXzxJkibB4QWRcf_kcjIofhwcUK_pWGUFC4xPXoimmne3h8eQ=w500-h500-c-k-nd",
    ":body-turquoise-yoga-pose:": "https://yt3.ggpht.com/GW3otW7CmWpuayb7Ddo0ux5c-OvmPZ2K3vaytJi8bHFjcn-ulT8vcHMNcqVqMp1j2lit2Vw=w500-h500-c-k-nd",
    ":location-yellow-teal-bars:": "https://yt3.ggpht.com/YgeWJsRspSlAp3BIS5HMmwtpWtMi8DqLg9fH7DwUZaf5kG4yABfE1mObAvjCh0xKX_HoIR23=w500-h500-c-k-nd",
    ":person-turquoise-writing-headphones:": "https://yt3.ggpht.com/DC4KrwzNkVxLZa2_KbKyjZTUyB9oIvH5JuEWAshsMv9Ctz4lEUVK0yX5PaMsTK3gGS-r9w=w500-h500-c-k-nd",
    ":person-turquoise-wizard-wand:": "https://yt3.ggpht.com/OiZeNvmELg2PQKbT5UCS0xbmsGbqRBSbaRVSsKnRS9gvJPw7AzPp-3ysVffHFbSMqlWKeQ=w500-h500-c-k-nd",
    ":person-blue-eating-spaghetti:": "https://yt3.ggpht.com/AXZ8POmCHoxXuBaRxX6-xlT5M-nJZmO1AeUNo0t4o7xxT2Da2oGy347sHpMM8shtUs7Xxh0=w500-h500-c-k-nd",
    ":face-turquoise-music-note:": "https://yt3.ggpht.com/-K6oRITFKVU8V4FedrqXGkV_vTqUufVCQpBpyLK6w3chF4AS1kzT0JVfJxhtlfIAw5jrNco=w500-h500-c-k-nd",
    ":person-pink-swaying-hair:": "https://yt3.ggpht.com/L8cwo8hEoVhB1k1TopQaeR7oPTn7Ypn5IOae5NACgQT0E9PNYkmuENzVqS7dk2bYRthNAkQ=w500-h500-c-k-nd",
    ":person-blue-speaking-microphone:": "https://yt3.ggpht.com/FMaw3drKKGyc6dk3DvtHbkJ1Ki2uD0FLqSIiFDyuChc1lWcA9leahX3mCFMBIWviN2o8eyc=w500-h500-c-k-nd",
    ":rocket-red-countdown-liftoff:": "https://yt3.ggpht.com/lQZFYAeWe5-SJ_fz6dCAFYz1MjBnEek8DvioGxhlj395UFTSSHqYAmfhJN2i0rz3fDD5DQ=w500-h500-c-k-nd",
    ":face-purple-rain-drops:": "https://yt3.ggpht.com/woHW5Jl2RD0qxijnl_4vx4ZhP0Zp65D4Ve1DM_HrwJW-Kh6bQZoRjesGnEwjde8F4LynrQ=w500-h500-c-k-nd",
    ":face-pink-drinking-tea:": "https://yt3.ggpht.com/WRLIgKpnClgYOZyAwnqP-Edrdxu6_N19qa8gsB9P_6snZJYIMu5YBJX8dlM81YG6H307KA=w500-h500-c-k-nd",
    ":person-purple-stage-event:": "https://yt3.ggpht.com/YeVVscOyRcDJAhKo2bMwMz_B6127_7lojqafTZECTR9NSEunYO5zEi7R7RqxBD7LYLxfNnXe=w500-h500-c-k-nd",
    ":face-purple-open-box:": "https://yt3.ggpht.com/7lJM2sLrozPtNLagPTcN0xlcStWpAuZEmO2f4Ej5kYgSp3woGdq3tWFrTH30S3mD2PyjlQ=w500-h500-c-k-nd",
    ":person-yellow-podium-blue:": "https://yt3.ggpht.com/N28nFDm82F8kLPAa-jY_OySFsn3Ezs_2Bl5kdxC8Yxau5abkj_XZHYsS3uYKojs8qy8N-9w=w500-h500-c-k-nd",
    ":baseball-white-cap-out:": "https://yt3.ggpht.com/8DaGaXfaBN0c-ZsZ-1WqPJ6H9TsJOlUUQQEoXvmdROphZE9vdRtN0867Gb2YZcm2x38E9Q=w500-h500-c-k-nd",
    ":whistle-red-blow:": "https://yt3.ggpht.com/DBu1ZfPJTnX9S1RyKKdBY-X_CEmj7eF6Uzl71j5jVBz5y4k9JcKnoiFtImAbeu4u8M2X8tU=w500-h500-c-k-nd",
    ":person-turquoise-crowd-surf:": "https://yt3.ggpht.com/Q0wFvHZ5h54xGSTo-JeGst6InRU3yR6NdBRoyowaqGY66LPzdcrV2t-wBN21kBIdb2TeNA=w500-h500-c-k-nd",
    ":finger-red-number-one:": "https://yt3.ggpht.com/Hbk0wxBzPTBCDvD_y4qdcHL5_uu7SeOnaT2B7gl9GLB4u8Ecm9OaXCGSMMUBFeNGl5Q3fHJ2=w500-h500-c-k-nd",
    ":text-yellow-goal:": "https://yt3.ggpht.com/tnHp8rHjXecGbGrWNcs7xss_aVReaYE6H-QWRCXYg_aaYszHXnbP_pVADnibUiimspLvgX0L=w500-h500-c-k-nd",
    ":medal-yellow-first-red:": "https://yt3.ggpht.com/EEHiiIalCBKuWDPtNOjjvmEZ-KRkf5dlgmhe5rbLn8aZQl-pNz_paq5UjxNhCrI019TWOQ=w500-h500-c-k-nd",
    ":person-blue-wheelchair-race:": "https://yt3.ggpht.com/ZepxPGk5TwzrKAP9LUkzmKmEkbaF5OttNyybwok6mJENw3p0lxDXkD1X2_rAwGcUM0L-D04=w500-h500-c-k-nd",
    ":card-red-penalty:": "https://yt3.ggpht.com/uRDUMIeAHnNsaIaShtRkQ6hO0vycbNH_BQT7i3PWetFJb09q88RTjxwzToBy9Cez20D7hA=w500-h500-c-k-nd",
    ":stopwatch-blue-hand-timer:": "https://yt3.ggpht.com/DCvefDAiskRfACgolTlvV1kMfiZVcG50UrmpnRrg3k0udFWG2Uo9zFMaJrJMSJYwcx6fMgk=w500-h500-c-k-nd",
    ":yt:": "https://yt3.ggpht.com/IkpeJf1g9Lq0WNjvSa4XFq4LVNZ9IP5FKW8yywXb12djo1OGdJtziejNASITyq4L0itkMNw=w500-h500-c-k-nd",
    ":oops:": "https://yt3.ggpht.com/PFoVIqIiFRS3aFf5-bt_tTC0WrDm_ylhF4BKKwgqAASNb7hVgx_adFP-XVhFiJLXdRK0EQ=w500-h500-c-k-nd",
    ":buffering:": "https://yt3.ggpht.com/5gfMEfdqO9CiLwhN9Mq7VI6--T2QFp8AXNNy5Fo7btfY6fRKkThWq35SCZ6SPMVCjg-sUA=w500-h500-c-k-nd",
    ":stayhome:": "https://yt3.ggpht.com/_1FGHypiub51kuTiNBX1a0H3NyFih3TnHX7bHU06j_ajTzT0OQfMLl9RI1SiQoxtgA2Grg=w500-h500-c-k-nd",
    ":dothefive:": "https://yt3.ggpht.com/-nM0DOd49969h3GNcl705Ti1fIf1ZG_E3JxcOUVV-qPfCW6jY8xZ98caNLHkVSGRTSEb7Y9y=w500-h500-c-k-nd",
    ":elbowbump:": "https://yt3.ggpht.com/2ou58X5XuhTrxjtIM2wew1f-HKRhN_T5SILQgHE-WD9dySzzJdGwL4R1gpKiJXcbtq6sjQ=w500-h500-c-k-nd",
    ":goodvibes:": "https://yt3.ggpht.com/2CvFOwgKpL29mW_C51XvaWa7Eixtv-3tD1XvZa1_WemaDDL2AqevKbTZ1rdV0OWcnOZRag=w500-h500-c-k-nd",
    ":thanksdoc:": "https://yt3.ggpht.com/bUnO_VwXW2hDf-Da8D64KKv6nBJDYUBuo13RrOg141g2da8pi9-KClJYlUDuqIwyPBfvOO8=w500-h500-c-k-nd",
    ":videocall:": "https://yt3.ggpht.com/k5v_oxUzRWmTOXP0V6WJver6xdS1lyHMPcMTfxn23Md6rmixoR5RZUusFbZi1uZwjF__pv4=w500-h500-c-k-nd",
    ":virtualhug:": "https://yt3.ggpht.com/U1TjOZlqtS58NGqQhE8VWDptPSrmJNkrbVRp_8jI4f84QqIGflq2Ibu7YmuOg5MmVYnpevc=w500-h500-c-k-nd",
    ":yougotthis:": "https://yt3.ggpht.com/s3uOe4lUx3iPIt1h901SlMp_sKCTp3oOVj1JV8izBw_vDVLxFqk5dq-3NX-nK_gnUwVEXld3=w500-h500-c-k-nd",
    ":sanitizer:": "https://yt3.ggpht.com/EJ_8vc4Gl-WxCWBurHwwWROAHrPzxgePodoNfkRY1U_I8L1O2zlqf7-wfUtTeyzq2qHNnocZ=w500-h500-c-k-nd",
    ":takeout:": "https://yt3.ggpht.com/FizHI5IYMoNql9XeP7TV3E0ffOaNKTUSXbjtJe90e1OUODJfZbWU37VqBbTh-vpyFHlFIS0=w500-h500-c-k-nd",
    ":hydrate:": "https://yt3.ggpht.com/tpgZgmhX8snKniye36mnrDVfTnlc44EK92EPeZ0m9M2EPizn1vKEGJzNYdp7KQy6iNZlYDc1=w500-h500-c-k-nd",
    ":chillwcat:": "https://yt3.ggpht.com/y03dFcPc1B7CO20zgQYzhcRPka5Bhs6iSg57MaxJdhaLidFvvXBLf_i4_SHG7zJ_2VpBMNs=w500-h500-c-k-nd",
    ":chillwdog:": "https://yt3.ggpht.com/Ir9mDxzUi0mbqyYdJ3N9Lq7bN5Xdt0Q7fEYFngN3GYAcJT_tccH1as1PKmInnpt2cbWOam4=w500-h500-c-k-nd",
    ":elbowcough:": "https://yt3.ggpht.com/DTR9bZd1HOqpRJyz9TKiLb0cqe5Hb84Yi_79A6LWlN1tY-5kXqLDXRmtYVKE9rcqzEghmw=w500-h500-c-k-nd",
    ":learning:": "https://yt3.ggpht.com/ZuBuz8GAQ6IEcQc7CoJL8IEBTYbXEvzhBeqy1AiytmhuAT0VHjpXEjd-A5GfR4zDin1L53Q=w500-h500-c-k-nd",
    ":washhands:": "https://yt3.ggpht.com/qXUeUW0KpKBc9Z3AqUqr_0B7HbW1unAv4qmt7-LJGUK_gsFBIaHISWJNt4n3yvmAnQNZHE-u=w500-h500-c-k-nd",
    ":socialdist:": "https://yt3.ggpht.com/igBNi55-TACUi1xQkqMAor-IEXmt8He56K7pDTG5XoTsbM-rVswNzUfC5iwnfrpunWihrg=w500-h500-c-k-nd",
    ":shelterin:": "https://yt3.ggpht.com/gjC5x98J4BoVSEPfFJaoLtc4tSBGSEdIlfL2FV4iJG9uGNykDP9oJC_QxAuBTJy6dakPxVeC=w500-h500-c-k-nd"
};

const ytEmotesList = Object.keys(ytEmotes).map(e => e.replace(/:/g, ''));

const getYTEmotesFromMessage = (message) => {
    const words = message.split(':');
    return words.map(word => {
        const matchingEmote = ytEmotesList.find(e => e === word);
        if (!matchingEmote) {
            return undefined;
        }
        const originalName = `:${matchingEmote}:`;
        return {
            type: 'youtube',
            name: matchingEmote,
            originalName,
            id: matchingEmote,
            urls: {
                1: ytEmotes[originalName],
                2: ytEmotes[originalName],
                4: ytEmotes[originalName],
            }
        };
    }).filter(emote => !!emote);
};

const processYoutubeEmotes = (text) => {
    return getYTEmotesFromMessage(text);
};

const processYoutubeBadges = (authorDetails) => {
    const {isChatModerator, isChatOwner, isChatSponsor, isVerified} = authorDetails || {};
    const badges = [];
    if(isChatModerator){
        badges.push({
            type: 'moderator',
            url: ytModBadge,
        });
    }
    if(isChatOwner) {
        badges.push({
            type: 'broadcaster',
            url: ytBroadcasterBadge,
        });
    }
    if(isChatSponsor) {
        badges.push({
            type: 'subscriber',
            url: ytSubscriberBadge,
        });
    }
    if(isVerified) {
        badges.push({
            type: 'verified',
            url: ytVerifiedBadge,
        });
    }

    return badges;
};


const DEFAULT_COLORS = [
    '#FF4A80',
    '#FF7070',
    '#FA8E4B',
    '#FEE440',
    '#5FFF77',
    '#00F5D4',
    '#00BBF9',
    '#4371FB',
    '#9B5DE5',
    '#F670DD',
]

let FieldData = {}
const Widget = {
    width: 0,
    height: 0,
    cooldown: false,
    raidActive: false,
    raidTimer: null,
    userMessageCount: {},
    soundEffects: [],
    messageCount: 0,
    pronouns: {},
    pronounsCache: {},
    channel: {},
    service: '',
    globalEmotes: {},
}

const PRONOUNS_API_BASE = 'https://pronouns.alejo.io/api'
const PRONOUNS_API = {
    user: username => `${PRONOUNS_API_BASE}/users/${username}`,
    pronouns: `${PRONOUNS_API_BASE}/pronouns`,
}

const GLOBAL_EMOTES = {
    ffz: {
        api: 'https://api2.frankerfacez.com/v1/set/global',
        transformer: response => {
            const { default_sets, sets } = response
            const emoteNames = []
            for (const set of default_sets) {
                const { emoticons } = sets[set]
                for (const emote of emoticons) {
                    emoteNames.push(emote.name)
                }
            }
            return emoteNames
        },
    },
    bttv: {
        api: 'https://api.betterttv.net/3/cached/emotes/global',
        transformer: response => {
            return response.map(emote => emote.code)
        },
    },
}

// ---------------------------
//    Widget Initialization
// ---------------------------

window.addEventListener('onWidgetLoad', async obj => {
    Widget.channel = obj.detail.channel
    loadFieldData(obj.detail.fieldData)
    loadGlobalEmotes()

    const { isEditorMode } = await SE_API.getOverlayStatus()
    conditionalMainClass('editor', isEditorMode)

    conditionalMainClass('dark-mode', FieldData.darkMode)
    conditionalMainClass(
        'custom-message-colors',
        FieldData.useCustomMessageColors,
    )
    conditionalMainClass('custom-border-colors', FieldData.useCustomBorderColors)
    conditionalMainClass(
        'custom-pronouns-badge-colors',
        FieldData.pronounsBadgeCustomColors,
    )

    if (FieldData.pronounsMode !== 'off') {
        await getPronouns()
    }

    if (FieldData.previewMode && isEditorMode) sendTestMessage(5, 500)
})

function loadFieldData(data) {
    FieldData = data

    const specificUsersSoundGroups = Array(10)
        .fill('specificUsersSoundGroup')
        .map((text, i) => `${text}${i + 1}`)
    processFieldData(
        value => stringToArray(value),
        'ignoreUserList',
        'ignorePrefixList',
        'allowUserList',
        'allowedStrings',
        ...specificUsersSoundGroups,
    )

    processFieldData(
        value => value === 'true',
        'includeEveryone',
        'includeSubs',
        'includeVIPs',
        'includeMods',
        'ignoreFirst',
        'emoteOnly',
        'highlightOnly',
        'darkMode',
        'useCustomMessageColors',
        'useCustomBorderColors',
        'previewMode',
        'largeEmotes',
        'showBadges',
        'fixedWidth',
        'pronounsLowercase',
        'pronounsBadgeCustomColors',
        'ffzGlobal',
        'bttvGlobal',
        'topEdge',
        'bottomEdge',
        'leftEdge',
        'rightEdge',
        'hideOutOfBounds',
    )

    processFieldData(value => (value ? value : 1), 'delay')

    const soundData = {}
    for (let i = 1; i <= 10; i++) {
        const group = FieldData[`soundGroup${i}`]
        const specificUsers = FieldData[`specificUsersSoundGroup${i}`]
        const isSpecific = specificUsers.length > 0
        // specific-index so multiple specifics don't override each other
        const userLevel = isSpecific
            ? `specific-${i}`
            : FieldData[`userLevelSoundGroup${i}`]
        const messageType = FieldData[`messageTypeSoundGroup${i}`]
        if (group && group.length > 0) {
            if (!soundData[userLevel]) {
                soundData[userLevel] = {}
            }

            if (isSpecific) {
                soundData[userLevel].users = specificUsers
            }

            if (!soundData[userLevel][messageType]) {
                soundData[userLevel][messageType] = []
            }

            soundData[userLevel][messageType].push(...group)
        }
    }

    Widget.soundEffects = Object.entries(soundData)
        .reduce((acc, entry) => {
            const [userLevel, { users, ...messageTypes }] = entry
            for (const [messageType, soundEffects] of Object.entries(messageTypes)) {
                acc.push({
                    userLevel,
                    messageType,
                    soundEffects,
                    users,
                    order: soundSortOrder(userLevel, messageType),
                })
            }
            return [...acc]
        }, [])
        .sort(({ order: a }, { order: b }) => {
            // sort by userLevel (0) then by messageType (1)
            if (a[0] !== b[0]) return b[0] - a[0]
            else return b[1] - a[1]
        })
}

function processFieldData(process, ...keys) {
    for (const key of keys) {
        FieldData[key] = process(FieldData[key])
    }
}

function stringToArray(string = '', separator = ',') {
    return string.split(separator).reduce((acc, value) => {
        const trimmed = value.trim()
        if (trimmed !== '') acc.push(trimmed)
        return acc
    }, [])
}

function conditionalMainClass(className, condition = true) {
    const main = $('main')

    if (condition) main.addClass(className)
    else main.removeClass(className)
}

function soundSortOrder(userLevel, messageType) {
    return [userLevelSortOrder(userLevel), messageTypeSortOrder(messageType)]
}

function userLevelSortOrder(userLevel) {
    switch (userLevel) {
        case 'everyone':
            return 0
        case 'subs':
            return 100
        case 'vips':
            return 200
        case 'mods':
            return 300
        default:
            return 1000 // assume specific
    }
}

function messageTypeSortOrder(messageType) {
    switch (messageType) {
        case 'highlight':
            return 1000
        case 'action':
            return 500
        case 'default':
            return 100
        default:
            return 0 // assume all
    }
}

async function loadGlobalEmotes() {
    for (const [key, value] of Object.entries(GLOBAL_EMOTES)) {
        const { api, transformer } = value
        const response = await get(api)
        if (response != null) {
            Widget.globalEmotes[key] = transformer(response)
        }
    }
}

// --------------------
//    Event Handlers
// --------------------

window.addEventListener('onEventReceived', obj => {
    const { listener, event } = obj.detail;
    switch (listener) {
        case 'message':
            onMessage(event)
            break
        case 'raid-latest':
            onRaid(event)
            break
        case 'delete-message':
            deleteMessage(event.msgId)
            break
        case 'delete-messages':
            deleteMessages(event.userId)
            break
        case 'event:test':
            onButton(event)
            break
        default:
            return
    }
})

// ---------------------
//    Event Functions
// ---------------------

async function onMessage(event, testMessage = false) {
    const { service } = event
    Widget.service = service
    let {
        // facebook
        attachment,
        // trovo
        content_data,
        messageId,
        content,
        // general
        badges = [],
        userId = '',
        nick: username = '',
        displayName = '',
    } = event.data

    let { emotes = [], text = '', msgId = '', displayColor: color } = event.data

    let pronouns = null
    const allPronounKeys = Object.keys(Widget.pronouns)
    if (FieldData.pronounsMode !== 'off' && allPronounKeys.length > 0) {
        if (testMessage) {
            const randomPronounKey =
                allPronounKeys[random(0, allPronounKeys.length - 1)]
            pronouns = Widget.pronouns[randomPronounKey]
        } else if (service === 'twitch') {
            pronouns = await getUserPronoun(username)
        }
    }

    if (pronouns && FieldData.pronounsLowercase) {
        pronouns = pronouns.toLowerCase()
    }

    // handle facebook
    if (service === 'facebook' && attachment && attachment.type === 'sticker') {
        const { url, target } = attachment
        text = 'sticker'
        emotes.push({
            type: 'sticker',
            name: text,
            id: target.id,
            gif: false,
            urls: {
                1: url,
                2: url,
                4: url,
            },
            start: 0,
            end: text.length,
        })
    }

    // handle trovo
    if (service === 'trovo') {
        // remove messages from before the widget was loaded... idk why trovo sends these
        if (!content_data) return

        msgId = messageId
        text = content
        color = undefined
    }

    let customBorderColor = '';
    if (service === 'youtube'){
        badges = processYoutubeBadges(event.data.authorDetails);
        const {snippet} = event.data;
        const {type} = snippet || {};
        if(type === 'superChatEvent') {
            const {superChatDetails} = snippet;
            const {amountDisplayString, currency, userComment, tier} = superChatDetails ||  {};
            text = `${currency}${amountDisplayString}\n\n${userComment}`;
            const safeTier = Math.min(Math.max(tier, 1), 7);
            const tierColor = tierToColorMap[safeTier];
            customBorderColor = tierColor;
        }
        if(type === 'newSponsorEvent') {
            const {displayMessage, newSponsorDetails} = snippet;
            const {memberLevelName} = newSponsorDetails || {};
            text = `${displayMessage} They are a member at ${memberLevelName} level.`;
            customBorderColor = membershipColor;
        }
    }

    // Filters
    if (FieldData.raidCooldown > 0 && !Widget.raidActive) return
    if (FieldData.raidCooldown < 0 && Widget.raidActive) return
    if (hasIgnoredPrefix(text)) return
    if (!passedMinMessageThreshold(userId)) return
    if (
        FieldData.allowUserList.length &&
        !userListIncludes(FieldData.allowUserList, displayName, username)
    )
        return
    if (userListIncludes(FieldData.ignoreUserList, displayName, username)) return

    const permittedUserLevel = await hasIncludedBadge(badges, username)
    if (!permittedUserLevel) return
    if (
        FieldData.allowedStrings.length &&
        !FieldData.allowedStrings.includes(text)
    )
        return

    if (FieldData.ignoreFirst && isFirstTimeChat(event.data)) return

    const messageType = getMessageType(event.data)
    if (FieldData.highlightOnly && messageType !== 'highlight') return

    emotes = processYoutubeEmotes(text);
    const fixedText = emotes.reduce((sum, emote) => {
        const regex = new RegExp(emote.originalName, 'g');
        return sum.replace(regex, ` ${emote.name} `);
    }, text);
    const parsedText = parse(htmlEncode(fixedText), emotes);
    const emoteSize = calcEmoteSize(parsedText)
    if (FieldData.emoteOnly && emoteSize === 1) return

    if (FieldData.messageCooldown) {
        if (Widget.cooldown) {
            return
        } else {
            Widget.cooldown = true
            window.setTimeout(() => {
                Widget.cooldown = false
            }, FieldData.messageCooldown * 1000)
        }
    }

    const elementData = {
        parsedText,
        name: displayName,
        emoteSize,
        messageType,
        msgId,
        userId,
        color,
        badges,
        pronouns,
        customBorderColor,
    }

    // Render Bubble
    if (FieldData.positionMode !== 'list') {
        $('main').append(BubbleComponent(elementData))
    } else {
        $('main').prepend(BubbleComponent(elementData))
    }
    const currentMessage = `.bubble[data-message-id="${msgId}"]`

    // Calcute Bubble Position
    window.setTimeout(_ => {
        const height = $(currentMessage).outerHeight()
        let maxWidth =
            FieldData.fixedWidth || FieldData.theme.includes('.css')
                ? FieldData.maxWidth
                : $(`${currentMessage} .message-wrapper`).width() + 1
        const minWidth = $(`${currentMessage} .username`).outerWidth()

        $(`${currentMessage} .message`).css({
            '--dynamicWidth': Math.max(minWidth, maxWidth),
        })

        if (FieldData.positionMode !== 'list') {
            // I'm not entirely sure why the + 30 is necessary,
            // but it makes the calculations work correctly
            let xMax = Math.max(minWidth, maxWidth) + 30

            if (FieldData.theme === 'animal-crossing') {
                xMax += 15 // due to margin-left 15 on .message
            }

            const { left, top, right, bottom } = calcPosition(xMax, height)

            window.setTimeout(_ => {
                $(currentMessage).css({ left, top, right, bottom })
            }, 300)
        }
    }, 300)

    // Get Sound
    let sound = null
    const soundUrls = getSound(username, displayName, badges, messageType)
    if (soundUrls) {
        sound = new Audio(soundUrls[random(0, soundUrls.length - 1)])
        sound.volume = parseInt(FieldData.volume) / 100
    }

    // Show Bubble and Play Sound
    window.setTimeout(_ => {
        Widget.messageCount++
        if (soundUrls) sound.play()
        $(currentMessage).addClass('animate')
        $(currentMessage).addClass(FieldData.animation)
        if (FieldData.positionMode === 'list')
            $(currentMessage).css({ position: 'relative' })

        const getOldest = () => {
            const oldestMsgId =
                FieldData.positionMode !== 'list'
                    ? $('.bubble:not(.expired)').first().attr('data-message-id')
                    : $('.bubble:not(.expired)').last().attr('data-message-id')
            return [`.bubble[data-message-id="${oldestMsgId}"]`, oldestMsgId]
        }

        const earlyDelete = (selector, id) => {
            $(selector).addClass('expired')
            $(selector).fadeOut(400, _ => deleteMessage(id))
        }

        // Max message handling
        if (
            FieldData.maxMessages > 0 &&
            Widget.messageCount > FieldData.maxMessages
        ) {
            const [selector, id] = getOldest()
            earlyDelete(selector, id)
        }

        if (FieldData.hideOutOfBounds && FieldData.positionMode === 'list') {
            let hideDelay = 0
            if (FieldData.animation === 'dynamic') {
                if (
                    FieldData.listDirection === 'left' ||
                    FieldData.listDirection === 'right'
                )
                    hideDelay = 200
                if (
                    FieldData.listDirection === 'top' ||
                    FieldData.listDirection === 'bottom'
                )
                    hideDelay = 1000
            }
            window.setTimeout(_ => {
                let tryDelete = true
                while (tryDelete) {
                    const [selector, id] = getOldest()
                    const { left, top } = $(selector).position()
                    const height = $(selector).outerHeight()
                    const width = $(selector).outerWidth()
                    const widgetWidth = $('main').innerWidth()
                    const widgetHeight = $('main').innerHeight()

                    switch (FieldData.listDirection) {
                        case 'bottom':
                            if (top < FieldData.padding) earlyDelete(selector, id)
                            else tryDelete = false
                            break
                        case 'top':
                            if (top > widgetHeight - FieldData.padding - height)
                                earlyDelete(selector, id)
                            else tryDelete = false
                            break
                        case 'left':
                            if (left > widgetWidth - FieldData.padding - width)
                                earlyDelete(selector, id)
                            else tryDelete = false
                            break
                        case 'right':
                            if (left < FieldData.padding) earlyDelete(selector, id)
                            else tryDelete = false
                            break
                        default: // nothing
                    }
                }
            }, hideDelay)
        }

        if (FieldData.lifetime > 0) {
            window.setTimeout(_ => {
                deleteMessage(msgId)
            }, FieldData.lifetime * 1000)
        }
    }, FieldData.delay * 1000)
}

function onRaid(event) {
    if (FieldData.raidCooldown === 0) return
    if (event.amount < FieldData.raidMin) return

    // Reset timer if another raid happens during an active raid timer
    clearTimeout(Widget.raidTimer)

    Widget.raidActive = true
    Widget.raidTimer = window.setTimeout(() => {
        Widget.raidActive = false
    }, Math.abs(FieldData.raidCooldown) * 1000)
}

function deleteMessage(msgId) {
    const messages = $(`.bubble[data-message-id="${msgId}"]`)
    Widget.messageCount -= messages.length
    messages.remove()
}

function deleteMessages(userId) {
    // userId is undefined when clear chat is used
    // when userId is defined, that user has been banned or timed out
    let selector = '.bubble'

    if (userId) {
        selector = `.bubble[data-user-id="${userId}"]`
        Widget.messageCount -= $(selector).length
    } else {
        Widget.messageCount = 0
    }

    $(selector).remove()
}

function onButton(event) {
    const { listener, field, value } = event

    if (listener !== 'widget-button' || value !== 'zaytri_dynamicchatbubbles')
        return

    switch (field) {
        case 'testMessageButton':
            sendTestMessage()
            break
        default:
            return
    }
}

const TEST_USER_TYPES = [
    { name: 'User', badges: [] },
    {
        name: 'Moderator',
        badges: [
            {
                type: 'moderator',
                url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3',
            },
        ],
    },
    {
        name: 'VIP',
        badges: [
            {
                type: 'vip',
                url: 'https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3',
            },
        ],
    },
]

function sendTestMessage(amount = 1, delay = 250) {
    for (let i = 0; i < amount; i++) {
        window.setTimeout(_ => {
            const number = numbered.stringify(random(1, 10))
            const userType = TEST_USER_TYPES[random(0, TEST_USER_TYPES.length - 1)]
            const name = `${userType.name}_${numbered.stringify(random(1, 10))}`
            const event = {
                data: {
                    userId: name,
                    tags: {},
                    text: 'test',
                    displayName: random(0, 1) ? name : name.toLowerCase(),
                    nick: '',
                    msgId: `${name}_${Date.now()}`,
                    badges: userType.badges,
                },
            }

            const previewMessage = FieldData.previewMessage.trim()
            if (previewMessage !== '') {
                event.data.text = previewMessage
            } else {
                const [text, emotes] =
                    TEST_MESSAGES[random(0, TEST_MESSAGES.length - 1)]
                event.data.text = text
                event.data.emotes = emotes
                event.service = 'youtube';
                const randomNumber = Math.round(Math.random() * 10000) % 10;
                if(randomNumber === 1) {
                    const randomTier = (Math.round(Math.random() * 1000) % 13);
                    event.data.snippet = {
                        "type": "superChatEvent",
                        "superChatDetails": {
                            "amountMicros": "2000000",
                            "currency": "USD",
                            "amountDisplayString": "$2.00",
                            "userComment": `${text} tier is ${randomTier}`,
                            "tier": randomTier,
                        }
                    };
                }
                if(randomNumber === 2) {
                    event.data.snippet = {
                        "type": "newSponsorEvent",
                        "displayMessage": "Person just became a member!",
                        "newSponsorDetails": {
                            "memberLevelName": "Group A ~ The Classics"
                        }
                    };
                }
            }

            let messageType = 1
            switch (FieldData.previewType) {
                case 'random':
                    messageType = random(1, 3)
                    break
                case 'action':
                    messageType = 2
                    break
                case 'highlight':
                    messageType = 3
                    break
                default:
                    messageType = 1
            }

            if (messageType === 2) {
                event.data.isAction = true
            } else if (messageType === 3) {
                event.data.tags['msg-id'] = 'highlighted-message'
            }
            onMessage(event, true)
        }, i * delay)
    }
}

// -------------------------
//    Component Functions
// -------------------------

function BubbleComponent(props) {
    const {
        parsedText,
        emoteSize,
        messageType,
        msgId,
        userId,
        color: userColor,
        badges,
        pronouns,
        customBorderColor,
    } = props

    let { name } = props

    if (FieldData.pronounsMode === 'suffix' && pronouns) {
        name = `${name} (${pronouns})`
    }

    const color = customBorderColor || userColor || generateColor(name)
    const tColor = tinycolor(color)
    const darkerColor = tinycolor
        .mix(
            FieldData.useCustomBorderColors ? ( customBorderColor || FieldData.borderColor ) : color,
            'black',
            25,
        )
        .toString()

    // based on https://stackoverflow.com/a/69869976
    const isDark = tColor.getLuminance() < 0.4

    const parsedElements = parsedText.map(({ type, data }) => {
        switch (type) {
            case 'emote':
                return EmoteComponent(data)
            case 'text':
            default:
                return TextComponent(data)
        }
    })

    let containerClasses = [
        'bubble',
        `emote-${FieldData.largeEmotes ? emoteSize : 1}`,
        customBorderColor ? 'custom-border' : '',
    ]
    switch (messageType) {
        case 'highlight': {
            if (FieldData.highlightStyle === 'rainbow')
                containerClasses.push('highlight')
            break
        }
        case 'action': {
            if (FieldData.actionStyle === 'italics') containerClasses.push('action')
            break
        }
        default: // nothing
    }

    if (isDark && !FieldData.theme.includes('.css'))
        containerClasses.push('user-color-dark')

    let usernameChildren = []
    if (FieldData.showBadges) {
        usernameChildren = BadgesComponent(badges)
    }
    if (FieldData.pronounsMode === 'badge' && pronouns) {
        usernameChildren.push(PronounsBadgeComponent(pronouns))
    }
    usernameChildren.push(name)

    const usernameProps = {}
    if (!FieldData.useCustomBorderColors && !FieldData.theme.includes('.css')) {
        usernameProps.style = {
            color: isDark
                ? tinycolor.mix(color, 'white', 85).toString()
                : tinycolor.mix(color, 'black', 85).toString(),
        }
    }

    const usernameBoxProps = {}
    if (FieldData.theme.includes('.css')) {
        usernameChildren.push(SpacerComponent())
        usernameChildren.push(
            Component('div', {
                class: 'title-bar-controls',
                children: [
                    Component('button', { 'aria-label': 'Minimize' }),
                    Component('button', { 'aria-label': 'Maximize' }),
                    Component('button', { 'aria-label': 'Close' }),
                ],
            }),
        )
        containerClasses.push('window')
        usernameBoxProps.class = 'title-bar'
    }

    const bubbleChildren = [
        UsernameBoxComponent(
            UsernameComponent(usernameChildren, usernameProps),
            usernameBoxProps,
        ),
        MessageComponent(MessageWrapperComponent(parsedElements)),
    ]

    if (FieldData.theme === 'default') {
        bubbleChildren.unshift(BackgroundComponent())
    }

    return Component('section', {
        class: containerClasses,
        style: { '--userColor': color, '--darkerColor': darkerColor },
        'data-message-id': msgId,
        'data-user-id': userId,
        children: bubbleChildren,
    })
}

function BadgesComponent(badges) {
    return badges.map(badge =>
        Component('img', { class: 'badge', src: badge.url, alt: badge.type }),
    )
}

function TextComponent(text) {
    return Component('span', { class: 'text', children: text })
}

function EmoteComponent({ urls, name }) {
    let url = urls[4]
    if (!url) url = urls[2]
    if (!url) url = urls[1]
    return Component('img', { class: ['emote'], src: url, alt: name })
}

const ClassComponent =
    (tag, className) =>
        (children, props = {}) => {
            const { class: classNames, ...rest } = props
            return Component(tag, {
                children,
                class: [joinIfArray(classNames), className],
                ...rest,
            })
        }
const BackgroundComponent = ClassComponent('div', 'bubble-background')
const UsernameBoxComponent = ClassComponent('div', 'username-box')
const UsernameComponent = ClassComponent('div', 'username')
const PronounsBadgeComponent = ClassComponent('span', 'pronouns-badge')
const MessageComponent = ClassComponent('div', 'message')
const MessageWrapperComponent = ClassComponent('span', 'message-wrapper')
const SpacerComponent = ClassComponent('span', 'spacer')

function Component(tag, props) {
    const { children, class: classes, style, ...rest } = props

    if (classes) rest.class = joinIfArray(classes, ' ')

    if (style)
        rest.style = Object.entries(style)
            .map(([key, value]) => `${key}: ${value}`)
            .join(';')

    const attributes = Object.entries(rest).reduce(
        (acc, [attr, value]) => `${acc} ${attr}='${value}'`,
        '',
    )
    return `<${tag}${attributes}>${
        children !== undefined ? joinIfArray(children) : ''
    }</${tag}>`
}

// ----------------------------
//    Pronouns API Functions
// ----------------------------
async function getPronouns() {
    const res = await get(PRONOUNS_API.pronouns)
    if (res) {
        res.forEach(pronoun => {
            Widget.pronouns[pronoun.name] = pronoun.display
        })
    }
}

async function getUserPronoun(username) {
    const lowercaseUsername = username.toLowerCase()
    let pronouns = Widget.pronounsCache[lowercaseUsername]

    if (!pronouns || pronouns.expire < Date.now()) {
        const res = await get(PRONOUNS_API.user(lowercaseUsername))
        const [newPronouns] = res
        Widget.pronounsCache[lowercaseUsername] = {
            ...newPronouns,
            expire: Date.now() + 1000 * 60 * 5, // 5 minutes in the future
        }
        pronouns = Widget.pronounsCache[lowercaseUsername]
    }

    if (!pronouns.pronoun_id) {
        return null
    }

    return Widget.pronouns[pronouns.pronoun_id]
}

// ---------------------
//    Helper Functions
// ---------------------
async function get(URL) {
    return await fetch(URL)
        .then(async res => {
            if (!res.ok) return null
            return res.json()
        })
        .catch(error => null)
}

function hasIgnoredPrefix(text) {
    for (const prefix of FieldData.ignorePrefixList) {
        if (text.startsWith(prefix)) return true
    }
    return false
}

function passedMinMessageThreshold(userId) {
    if (FieldData.minMessages === 0) return true

    // begin counting
    if (!Widget.userMessageCount[userId]) Widget.userMessageCount[userId] = 0
    Widget.userMessageCount[userId]++

    return Widget.userMessageCount[userId] > FieldData.minMessages
}

function userListIncludes(userList, ...names) {
    const lowercaseNames = names.map(name => name.toLowerCase())
    return userList.some(user => lowercaseNames.includes(user.toLowerCase()))
}

async function hasIncludedBadge(badges = [], username) {
    const codeBadges = [...badges]

    if (FieldData.includeEveryone) return true

    const includedBadges = ['broadcaster']

    if (!codeBadges.length) return false

    if (FieldData.includeSubs) includedBadges.push('subscriber', 'founder')
    if (FieldData.includeVIPs) includedBadges.push('vip')
    if (FieldData.includeMods) includedBadges.push('moderator')

    return hasBadge(codeBadges, ...includedBadges)
}

function isMod(badges = []) {
    return hasBadge(badges, 'moderator', 'broadcaster')
}

function isVIP(badges = []) {
    return hasBadge(badges, 'vip', 'broadcaster')
}

function isSub(badges = []) {
    return hasBadge(badges, 'subscriber', 'founder', 'broadcaster')
}

function hasBadge(userBadges = [], ...badgeTypes) {
    return userBadges.some(({ type }) => badgeTypes.includes(type))
}

function getMessageType(data) {
    if (data.isAction) return 'action'
    if (data.tags && data.tags['msg-id'] === 'highlighted-message')
        return 'highlight'
    const type = data?.snippet?.type || '';
    if(type === 'superChatEvent' || type === 'newSponsorEvent'){
        return 'highlight';
    }
    return 'default'
}

function isFirstTimeChat(data) {
    return !!data.tags && data.tags['first-msg'] === '1'
}

function getSound(nick, name, badges, messageType) {
    for (const soundGroup of Widget.soundEffects) {
        const {
            userLevel,
            messageType: soundMessageType,
            users = [],
            soundEffects,
        } = soundGroup
        if (soundMessageType === 'all' || soundMessageType === messageType) {
            switch (userLevel) {
                case 'everyone':
                    return soundEffects
                case 'subs':
                    if (isSub(badges)) return soundEffects
                    break
                case 'vips':
                    if (isVIP(badges)) return soundEffects
                    break
                case 'mods':
                    if (isMod(badges)) return soundEffects
                    break
                // assume specific
                default:
                    if (userListIncludes(users, nick, name)) return soundEffects
                    break
            }
        }
    }
    return null
}

function parse(text, emotes) {
    const filteredEmotes = emotes.filter(emote => {
        const { name, type } = emote

        if (!['twitch', 'ffz', 'bttv', 'sticker', 'youtube'].includes(type)) return false

        if (
            (type === 'ffz' && FieldData.ffzGlobal) ||
            (type === 'bttv' && FieldData.bttvGlobal)
        )
            return true

        const globalEmotes = Widget.globalEmotes[type]
        if (!globalEmotes) return true

        return !globalEmotes.includes(name)
    })

    if (!filteredEmotes || filteredEmotes.length === 0) {
        return [{ type: 'text', data: text }]
    }

    const regex = createRegex(filteredEmotes.map(e => htmlEncode(e.name)))

    const textObjs = text
        .split(regex)
        .map(string => ({ type: 'text', data: string }))
    const last = textObjs.pop()

    const parsedText = textObjs.reduce((acc, textObj, index) => {
        const emoteData = filteredEmotes[index]
        if (emoteData.type === 'twitch') {
            emoteData.urls[
                '1'
                ] = `https://static-cdn.jtvnw.net/emoticons/v2/${emoteData.id}/default/light/1.0`
            emoteData.urls[
                '2'
                ] = `https://static-cdn.jtvnw.net/emoticons/v2/${emoteData.id}/default/light/2.0`
            emoteData.urls[
                '4'
                ] = `https://static-cdn.jtvnw.net/emoticons/v2/${emoteData.id}/default/light/3.0`
        }
        return [...acc, textObj, { type: 'emote', data: emoteData }]
    }, [])

    parsedText.push(last)
    return parsedText
}

function calcEmoteSize(parsedText) {
    let emotesFound = 0
    for (const { type, data } of parsedText) {
        if (type === 'emote') {
            emotesFound++
        } else if (data.trim() !== '') return 1
    }
    if (emotesFound > 1) return 2
    return 4
}

// I have no idea how this works anymore but it does
// Regex is so useful but it's so confusing
// This is all to parse out the emote text
const createRegex = strings => {
    const regexStrings = strings
        .sort()
        .reverse()
        .map(string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    const regex = `(?<=\\s|^)(?:${regexStrings.join('|')})(?=\\s|$|[.,!])`
    return new RegExp(regex, 'g')
}

function generateColor(name) {
    if (!name) return DEFAULT_COLORS[0]
    const value = name
        .split('')
        .reduce((sum, letter) => sum + letter.charCodeAt(0), 0)
    return DEFAULT_COLORS[value % DEFAULT_COLORS.length]
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function calcPosition(width, height) {
    const main = $('main')
    const widgetWidth = main.innerWidth()
    const widgetHeight = main.innerHeight()
    const { padding } = FieldData

    // edge testing
    /*-*
    return [
      random(0, 1) ? padding : Math.max(padding, widgetWidth - padding - width),
      random(0, 1) ? padding : Math.max(padding, widgetHeight - padding - height),
    ]
    /*-*/
    const minX = padding
    const maxX = Math.max(padding, widgetWidth - padding - width)
    const minY = padding
    const maxY = Math.max(padding, widgetHeight - padding - height)

    const randomX = random(minX, maxX)
    const randomY = random(minY, maxY)

    if (FieldData.positionMode === 'random') {
        return { top: randomY, left: randomX }
    } else {
        const possibleCoords = []
        const deviation = random(0, FieldData.edgeDeviation)

        if (FieldData.topEdge) {
            possibleCoords.push({ top: minY + deviation, left: randomX })
        }

        if (FieldData.bottomEdge) {
            possibleCoords.push({ bottom: minY + deviation, left: randomX })
        }

        if (FieldData.leftEdge) {
            possibleCoords.push({ left: minX + deviation, top: randomY })
        }

        if (FieldData.rightEdge) {
            possibleCoords.push({ right: minX + deviation, top: randomY })
        }

        // no edges chosen so just put all chats in the middle as an easter egg
        if (possibleCoords.length === 0) {
            return { left: (minX + maxX) / 2, top: (minY + maxY) / 2 }
        }

        return possibleCoords[random(0, possibleCoords.length - 1)]
    }
}

function joinIfArray(possibleArray, delimiter = '') {
    if (Array.isArray(possibleArray)) return possibleArray.join(delimiter)
    return possibleArray
}

// Custom test messages
const TEST_MESSAGES = [
    ['This is a long message'],
    ['uwu'],
    [':yt:'],
    [':yt::yt:'],
    [':yt::yt::yt::yt::yt::yt:'],
]

function htmlEncode(text) {
    return text.replace(/[\<\>\"\'\^\=]/g, char => `&#${char.charCodeAt(0)};`)
}
