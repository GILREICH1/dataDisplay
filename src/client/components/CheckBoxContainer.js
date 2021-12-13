import React from "react";
import styled from "styled-components";

const onlyBlacklisted = (events) => events.filter((event) => event.blacklisted);

const CheckBoxContainer = styled.span`
  padding: 5px;
  margin: 5px;
  ${"" /* transition: all 400ms ease-out; */}
  }
`;

// TODO modularise component for different filters
export const CheckBox = ({ events, setFilteredEvents }) => {
  const [blackListFilter, setBlackListFilter] = React.useState(false);

  React.useEffect(() => {
    if (blackListFilter) {
      setFilteredEvents(onlyBlacklisted(events));
    } else {
      setFilteredEvents(events);
    }
  }, [blackListFilter]);

  return (
    <CheckBoxContainer>
      <span>
        Show Only BlackListed
        <input
          type="checkbox"
          onChange={(e) => {
            setBlackListFilter(e.target.checked);
          }}
          checked={!!blackListFilter}
        />
      </span>
    </CheckBoxContainer>
  );
};
