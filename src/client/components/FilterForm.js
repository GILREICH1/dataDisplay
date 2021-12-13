import React from "react";

const FilterForm = ({ setFilteredEvents, events }) => {
  const [regex, setRegex] = React.useState("");

  const onChange = (e) => {
    setRegex(e.target.value);
  };

  React.useEffect(() => {
    if (regex) {
      let regexSearch = new RegExp(regex, "i");
      const filteredEvents = events.filter((event) =>
        regexSearch.test(event.domain)
      );
      setFilteredEvents(filteredEvents);
    } else {
      setFilteredEvents(events);
    }
  }, [regex]);

  return (
    <form onChange={onChange}>
      <input type="text"></input>
    </form>
  );
};

export default FilterForm;
