import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const text = {
  color: "black",
  fontSize: 20,
  padding: 2,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
    margin: 8,
    maxWidth: 310,
  },
  title: {
    color: "black",
    fontSize: 40,
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemContainer: {
    paddingTop: 16,
  },
  text,
  name: {
    ...text,
    fontWeight: "bold",
  },
  role: {
    ...text,
    fontStyle: "italic",
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const ExperienceItem = (props) => {
  const { name, start, stop, role, description } = props;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>
        {start}-{stop}
      </Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const ExperienceItemProps = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ExperienceItem.propTypes = ExperienceItemProps;

const Experience = (props) => {
  const { experience } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      {experience.map((experienceItem) => (
        <ExperienceItem
          key={experienceItem.name}
          name={experienceItem.name}
          start={experienceItem.start}
          stop={experienceItem.stop}
          role={experienceItem.role}
          description={experienceItem.description}
        />
      ))}
    </View>
  );
};

export const ExperienceProps = {
  experience: PropTypes.arrayOf(PropTypes.shape(ExperienceItemProps).isRequired)
    .isRequired,
};

Experience.propTypes = ExperienceProps;

export default Experience;
