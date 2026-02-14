import characterIdle from "../../../../assets/img/character/idle.gif";

export const Life = (props) => {
  
  const { life } = props;

  return (
      <>
        <img 
          alt="Character Hud"
          src={characterIdle}
        />
        <h3>
          {`x ${life}`}
        </h3>
      </>
  )
};

export default Life;