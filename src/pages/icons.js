import * as React from "react";

function Building(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.207 60.206"
      {...props}
    >
      <path d="M51.751 23.435V5.474h-7.106v25.975h-4.083V19.958H30.103v-7.862h-9.197v18.442h-2.282v-5.742H7.902v-7.862H0v37.799H60.207V23.434h-8.456zM4.843 26.899H2.239v-6.183h2.604v6.183zm6.25 12.021H8.489V28.439h2.604V38.92zm4.297-4.297h-2.604v-6.184h2.604v6.184zm9.765-4.632h-2.604v-6.183h2.604v6.183zm0-8.887h-2.604V14.92h2.604v6.184zm4.428 17.528h-2.604V32.45h2.604v6.182zm4.817-8.641h-2.604v-6.183H34.4v6.183zm14.713 5.549h-2.604v-6.184h2.604v6.184zm0-11.345h-2.604v-6.183h2.604v6.183zm0-10.31h-2.604V7.703h2.604v6.182zm5.469 26.894h-2.604V30.3h2.604v10.479z" />
    </svg>
  );
}
function Gramophone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M490.057 29.257H21.943C9.825 29.257 0 39.082 0 51.2v409.6c0 12.118 9.825 21.943 21.943 21.943h468.114c12.118 0 21.943-9.825 21.943-21.943V51.2c0-12.118-9.825-21.943-21.943-21.943zM43.886 73.143h11.148a169.904 169.904 0 00-11.148 11.148V73.143zm124.343 0c68.563 0 124.343 55.78 124.343 124.343s-55.78 124.343-124.343 124.343S43.886 266.048 43.886 197.486 99.666 73.143 168.229 73.143zm299.886 365.714H43.886V310.68c30.792 33.793 75.131 55.034 124.343 55.034 92.761 0 168.229-75.467 168.229-168.229 0-49.212-21.241-93.551-55.034-124.343h186.691v365.715z" />
      <path d="M183.748 181.965c-4.095-4.081-9.741-6.422-15.519-6.422s-11.426 2.341-15.521 6.422c-4.081 4.096-6.422 9.743-6.422 15.521 0 5.778 2.341 11.425 6.422 15.519 4.095 4.081 9.743 6.423 15.521 6.423s11.425-2.342 15.519-6.423c4.081-4.096 6.423-9.741 6.423-15.519 0-5.778-2.342-11.427-6.423-15.521zM409.6 117.029h-14.629c-12.118 0-21.943 9.825-21.943 21.943V153.6c0 6.492 2.835 12.306 7.314 16.323v135.503l-45.754 45.754c-15.262.973-27.389 13.66-27.389 29.164 0 16.132 13.125 29.257 29.257 29.257 15.503 0 28.191-12.127 29.164-27.389l52.182-52.182a21.936 21.936 0 006.426-15.515V169.923c4.481-4.017 7.314-9.832 7.314-16.323v-14.629c.001-12.118-9.824-21.942-21.942-21.942z" />
    </svg>
  );
}

function MusicalNote(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M93.161.071C59.66-1.043 32.22 11.314 32.22 11.314l-.02 62.709c-3.411-1.354-7.559-1.675-11.772-.651-9.083 2.207-15.031 9.82-13.285 17.007s10.524 11.225 19.606 9.019c8.564-2.081 14.338-8.969 13.507-15.772V36.771s19.404-6.784 44.573-8.485v34.849c-3.374-1.292-7.443-1.585-11.579-.58-9.083 2.206-15.031 9.819-13.285 17.007 1.745 7.187 10.523 11.224 19.606 9.018 7.931-1.927 13.471-7.977 13.587-14.264l.003.004V.071z" />
    </svg>
  );
}

function GitHub(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkChain(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
    </svg>
  );
}
export { Gramophone, Building, MusicalNote, GitHub, LinkChain };