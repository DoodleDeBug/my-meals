import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div>
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>
        My Meals helps people answer the age old question "What's for dinner?"
      </p>
      <p className={styles.text}>
        Quickly and easily get tasty suggestions for your next meal by simply
        selecting some filters and pressing "Suggest Meal". With new, exciting
        features coming out soon such as:
        <ul>
          <li>Personal Meal DataBase</li>
          <li>Sign up and login</li>
          <li>MORE filters</li>
          <li>Weekly meal planner</li>
        </ul>
        There is something for everyone!
      </p>
    </div>
  );
};

export default About;
