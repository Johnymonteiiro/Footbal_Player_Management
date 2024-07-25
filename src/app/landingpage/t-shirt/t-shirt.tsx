import { User } from "@/types/types";

interface TshirtProps {
  user: User;
}

export function Tshirt({ user }: TshirtProps) {


  return (
    <div className="relative border h-auto flex items-center justify-center px-2 rounded">
      <div>
        <svg
          width="400"
          height="600"
          viewBox="0 0 344 406"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="t-shirt">
            <path
              id="Vector 1"
              d="M67 390.5C72.4208 307.33 73.4406 256.236 72.5 159L58.5 177.5C33.3651 170.356 20.8927 163.776 1.5 147.5C22.0645 96.5935 33.7801 66.8516 50 44C74.718 29.8028 98.1149 21.0256 132.5 6L136.5 2C165.432 15.3124 181.339 16.0307 209 2L212.5 6C253.792 25.9976 277.794 32.2995 288.5 44C301.488 55.6489 314.282 82.5541 342.5 150.5C307.981 169.69 290.815 178.231 272.5 181L260.5 159V393C249 408.5 76 409.5 67 390.5Z"
              className="fill-gray-200 stroke-gray-500 dark:fill-blue-900 dark:stroke-gray-200"
              stroke-width="2"
            />
            <path
              id="Vector 35"
              d="M133 6.5C137.875 10.3227 144.5 13.5 154.5 16.5C164.5 19.5 183.5 19 193 16.5C200.228 14.598 210.142 9.34373 213 6.5"
              className=" stroke-gray-500 dark:stroke-gray-200"
              stroke-width="2"
            />
            <path
              id="Vector 36"
              d="M339 142.5C313.362 158.309 298.081 165.295 269 174"
              className=" stroke-gray-500 dark:stroke-gray-200"
              stroke-width="2"
            />
            <path
              id="Vector 37"
              d="M5 139C24.0861 157.464 37.4446 164.279 64 170.5"
              className=" stroke-gray-500 dark:stroke-gray-200"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>

      <div className="absolute flex items-center justify-center flex-col w-full h-auto top-36">
        <h1 className="text-2xl font-medium">{user?.name}</h1>
        <h1
          className={`relative top-10 font-medium ${
            user?.dorsal === 100 ? "text-8xl" : "text-9xl"
          }`}
        >
          {user?.dorsal || user.dorsal === 0 ? user?.dorsal : '?'}
        </h1>
      </div>
    </div>
  );
}
