// video icon

const iconStyle = `text-sm   w-14 h-14 p-4 rounded-full shadow-xl`;
const dash = `text-sm bg-pri-2  w-14 h-14 p-3 rounded-xl `;

const Video = () => {
  return (
    <svg
      className={iconStyle}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="VideocamIcon"
      fill="#fa3d3d"
    >
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
    </svg>
  );
};

// call
const Call = () => {
  return (
    <svg
      class={iconStyle}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#fa3d3d"
      data-testid="PermPhoneMsgIcon"
    >
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path>
    </svg>
  );
};

// message
const Msg = () => {
  return (
    <svg
      class={iconStyle}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid=""
      fill="#fa3d3d"
    >
      <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
    </svg>
  );
};

// dash
const Dash = () => {
  return (
    <svg
      class={dash}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#fa3d3d"
      data-testid="SpeedIcon"
    >
      <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
    </svg>
  );
};

// bell
const Bell = () => {
  return (
    <svg
      class={dash}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#fa3d3d"
      data-testid="NotificationsActiveIcon"
    >
      <path d="M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>
    </svg>
  );
};

// map
const Map = () => {
  return (
    <svg
      class={dash}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#fa3d3d"
      data-testid="LocationOnIcon"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  );
};

// fb
const Fb = () => {
  return (
    <svg
      class="w-6 h-6"
      fill="#fff"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="FacebookIcon"
    >
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
    </svg>
  );
};

// twitter
const Tw = () => {
  return (
    <svg
      class="w-6 h-6"
      fill="#fff"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="TwitterIcon"
    >
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
    </svg>
  );
};

//instagram image
const Ig = () => {
  return (
    <svg
      class='w-6 h-6'
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#fff"
      data-testid="InstagramIcon"
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
    </svg>
  );
};


// hamburger
const Hb = () => {
  return (
    <svg
      class={dash}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="MenuIcon"
      fill="#fff"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};




export { Msg as default, Call, Video, Dash, Bell, Map, Hb,Fb,Tw,Ig };
