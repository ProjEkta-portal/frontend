async function collegeName(collegeName) {
  /* TODO: get the data from the backend by quering with `collegeName` */
  return {
    name: "VIT Chennai",
    state: "Tamil Nadu",
    city: "Chennai",
    address: "The address basically",
    about: "VIT Chennai is a place to learn and a chance to grow",
  };
}

export default function CollegePage({params}) {
  return <h1>College page for the college {params.collegeName}</h1>;
}
