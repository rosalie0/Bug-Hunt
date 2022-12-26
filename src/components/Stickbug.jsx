/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import React, { useRef } from "react";

const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

function Stickbug({ bugSize = 10, bugPosition = [0, 0, 0] }) {
  const groupRef = useRef();
  const [bugXPosition, bugYPosition, bugZPosition] = bugPosition;
  console.log(bugXPosition, bugYPosition, bugZPosition);
  return (
    <group
      name="stickbug"
      ref={groupRef}
      position={bugPosition}
      rotation={[degreesToRadians(90), 0, 0]}
    >
      <mesh name="body">
        <capsuleGeometry args={[bugSize / 10, bugSize]} />
        <meshBasicMaterial color="brown" wireframe={true} />
      </mesh>

      <group name="frontLegs">
        <mesh
          name="rightFrontLeg"
          position={[3.5, 4, 0]}
          rotation={[0, 0, degreesToRadians(90)]}
        >
          <capsuleGeometry args={[0.25, 5]} />
          <meshBasicMaterial color="black" />
        </mesh>
        <mesh
          name="leftFrontLeg"
          position={[-3.5, 4, 0]}
          rotation={[0, 0, degreesToRadians(90)]}
        >
          <capsuleGeometry args={[0.25, 5]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </group>

      <group name="middleLegs">
        <mesh
          name="rightMiddleLeg"
          position={[3.5, 0, 0]}
          rotation={[0, 0, degreesToRadians(90)]}
        >
          <capsuleGeometry args={[0.25, 5]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh
          name="leftMiddleLeg"
          position={[-3.5, 0, 0]}
          rotation={[0, 0, degreesToRadians(90)]}
        >
          <capsuleGeometry args={[0.25, 5]} />
          <meshBasicMaterial color="red" />
        </mesh>
      </group>

      <group name="backLegs">
        <mesh
          name="rightBackLeg"
          position={[3.5, -4, 0]}
          rotation={[0, 0, degreesToRadians(90)]}
        >
          <capsuleGeometry args={[0.25, 5]} />
          <meshBasicMaterial color="blue" />
        </mesh>
        <mesh
          name="leftBackLeg"
          position={[-3.5, -4, 0]}
          rotation={[0, 0, degreesToRadians(90)]}
        >
          <capsuleGeometry args={[0.25, 5]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </group>
    </group>
  );
}

// Prop validations
Stickbug.propTypes = {
  bugSize: PropTypes.number,
  bugPosition: PropTypes.arrayOf(PropTypes.number),
};
export default Stickbug;
