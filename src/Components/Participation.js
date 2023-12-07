import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Participation = () => {
  return (
    <div className="mt-40 mb-40" id="participate">
      <div className="text-5xl font-bold block text-center opacity-90">
        Happenning Now
      </div>
      <div className="flex justify-center mt-20 mb-5">
        <Card
          style={{
            width: "23rem",
            borderTop: "10px solid blue",
            height: "20rem",
            marginRight: "20px",
          }}
        >
          {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg"  style={{height: '300px', aspectRatio:1, imageResolution: '-moz-initial'}}/> */}
          <Card.Body className="p-5">
            <div className="pb-10">
              <div className="text-4xl font-semibold pb-1">
                ABES Debate Competition
              </div>
              <div className="text-lg font-medium">December 01, 2023</div>
            </div>
            <div className="text-lg font-medium">Happenning Online</div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Participate
            </button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "23rem",
            borderTop: "10px solid green",
            height: "20rem",
            marginRight: "20px",
          }}
        >
          {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg"  style={{height: '300px', aspectRatio:1, imageResolution: '-moz-initial'}}/> */}
          <Card.Body className="p-5">
            <div className="pb-10">
              <div className="text-4xl font-semibold pb-1">
              Jaypee Litfest- Debate
              </div>
              <div className="text-lg font-medium">December 01, 2023</div>
            </div>
            <div className="text-lg font-medium">Happenning Online</div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Participate
            </button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "23rem",
            borderTop: "10px solid maroon",
            height: "20rem",
          }}
        >
          {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg"  style={{height: '300px', aspectRatio:1, imageResolution: '-moz-initial'}}/> */}
          <Card.Body className="p-5">
            <div className="pb-10">
              <div className="text-4xl font-semibold pb-1">
              Insurrection- debate
              </div>
              <div className="text-lg font-medium">December 01, 2023</div>
            </div>
            <div className="text-lg font-medium">Happenning Online</div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Participate
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Participation;
