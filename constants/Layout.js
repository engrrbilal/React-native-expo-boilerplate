import { Dimensions } from "react-native";
import Colors from "./Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalScroll: { Height: "auto", maxHeight: height - 100 },
  errorStyle: { textAlign: "center", color: "red", margin: 10 },

  titleStyle: {
    fontSize: 23,
    marginLeft: 15,
    marginTop: 5,
    textAlign: "left",
    color: Colors.titleColor
  },
  /* Custom card style */
  customCardContainer: {
    marginTop: 20,
    width: "95%"
  },
  customCardContainerStyle: {
    flex: 1,
    alignItems: "stretch",
    margin: 15,
    marginBottom: 0,
    borderColor: Colors.borderColor,
    borderWidth: 1
  },
  customCardTitleStyle: {
    fontSize: 20,
    marginLeft: 15,
    textAlign: "left"
  },
  customCardTextLeftStyle: { textAlign: "left", padding: 10 },
  customCardTextRightStyle: {
    textAlign: "right",
    padding: 20,
    color: "#2fa4e7"
  },

  /* Modal Common styles */
  modalStyle: {
    borderColor: Colors.modalHeaderFooterBg,
    borderWidth: 1
    // marginLeft: 5,
    // marginRight: 5
  },
  modalHeaderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 40,
    backgroundColor: Colors.modalHeaderFooterBg
  },
  modalFooterStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.modalHeaderFooterBg,
    // color: "#ffffff",
    padding: 10
    // marginTop: 5
  },
  buttonStyleDialogFooter: {
    width: 30,
    height: 8,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#ffffff"
  },
  modalLabelContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10
  },
  modalLabelTextStyle: {
    paddingRight: 10,
    fontSize: 18
  },
  inputField: {
    color: "#333333",
    padding: 4,
    borderWidth: 0.5,
    borderColor: "#4682B4",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3
  },
  customInputField: {
    color: "#333333",
    padding: 4,
    // marginTop: 4,
    borderWidth: 0.5,
    borderColor: "#4682B4",
    marginBottom: 10,
    // width: width / 2,
    width: width / 2 - 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3
  },
  smallInputField: {
    color: "#333333",
    padding: 3,
    borderWidth: 0.5,
    borderColor: "#4682B4",
    marginBottom: 10,
    width: width / 4,
    // width: width / 2 - 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3
  },

  /* List Table Comon Style */
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  border: { borderWidth: 0 },
  head: {
    height: 40
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  headerTitle: {
    color: Colors.titleColor,
    fontSize: 22,
    fontWeight: "bold"
  },
  createIconStyle: { paddingLeft: 5, paddingRight: 5 },
  textHeader: { textAlign: "center", fontSize: 18, fontWeight: "bold" },
  textHeaderLeftAlign: { textAlign: "left", fontSize: 18, fontWeight: "bold" },
  textCenter: { textAlign: "center" },
  textLeft: { textAlign: "left" },
  textRight: { textAlign: "right" },
  headRow: { flexDirection: "row", height: 50 },
  row: { flexDirection: "row", height: 40, backgroundColor: "#F9F9F9" },
  buttonStyle: {
    width: 50,
    height: 6,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10
  }
};
