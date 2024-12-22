import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <Age age={person.age} />
    <Partner
      isMarried={person.isMarried}
      sex={person.sex}
      partnerName={person.partnerName}
    />
  </section>
);

const Age = ({ age }) => age && <p className="Person__age">{`I am ${age}`}</p>;
const Partner = ({ isMarried, sex, partnerName }) => {
  let message = 'I am not married';

  if (isMarried && sex === 'm') {
    message = `${partnerName} is my wife`;
  }

  if (isMarried && sex === 'f') {
    message = `${partnerName} is my husband`;
  }

  return <p className="Person__partner">{`${message}`}</p>;
};
