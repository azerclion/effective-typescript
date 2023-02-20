interface Person {
  first: string;
  last: string;
}
function email(options: { person: Person; subject: string; body: string }) {
  // ...
}

function email1({ person: Person, subject: string, body: string }) {} // 이렇게 하면 안되고 아래와 같이 해야함....

function email2({
  person,
  subject,
  body,
}: {
  person: Person;
  subject: string;
  body: string;
}) {}

export default {};
