import React from "react";
import type { TData } from "../App";
interface Props {
  dog: TData;
}

const Card: React.FC<Props> = ({ dog }) => {
  const verificar = (parametro: string) => {
    return parametro === undefined || "" ? "Nao identificado" : parametro;
  };
  return (
    <li className="dog m-10">
      <div className="informacoes flex flex-col j items-center">
        <div className="titulo text-5xl m-4">
          <span>Raça: {dog.name}</span>
        </div>
        <div className="img">
          <img
            id={dog.image.id}
            src={dog.image.url}
            alt={dog.name}
            loading="lazy"
          />
        </div>
        <div className="caracteristicas flex flex-col items-center ">
          <span>Proposito: {verificar(dog.bred_for)}</span>
          <span>grupo da raca: {verificar(dog.breed_group)}</span>
          <div className="altura flex flex-col items-center">
            <span>Altura</span>
            <span>Imperial: {verificar(dog.height.imperial)} pés</span>
            <span>Metrica: {verificar(dog.height.metric)} centímetros</span>
          </div>
          <span>Vive: {verificar(dog.life_span)}</span>
          <span>Origem: {verificar(dog.origin)}</span>
          <span>Temperamento: {verificar(dog.temperament)}</span>
          <div className="peso flex flex-col items-center">
            <span>Peso</span>
            <span>Imperial: {verificar(dog.weight.imperial)} pounds</span>
            <span>Metrica: {verificar(dog.weight.metric)} kg</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
