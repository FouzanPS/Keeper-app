import React from "react";

const date = new Date();
let year = date.getFullYear();

export default function footer() {
  return (
    <div>
      <footer class="py-3 my-4">
        <p class="text-center text-body-secondary fixed-bottom">
          &#9400; Copyright {year}
        </p>
      </footer>
    </div>
  );
}
