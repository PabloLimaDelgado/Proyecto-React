export const Item = ({ img, descripcion, price }) => {
    return (
      <div>
        <div>
          <img src={img} />
        </div>
        <div>
          <div>
            <span>{descripcion}</span>
          </div>
          <span>
            $
            {price.toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    );
  };