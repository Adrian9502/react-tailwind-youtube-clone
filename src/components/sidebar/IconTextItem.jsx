import PropTypes from "prop-types";
export default function IconTextItem({ icon: Icon, text, color = "white" }) {
  return (
    <div className="flex px-3 items-center py-2 rounded-xl transition hover:bg-neutral-700 cursor-pointer">
      <div className="pr-5">
        <Icon size={23} color={color} />
      </div>
      <span className="font-semibold">{text}</span>
    </div>
  );
}
IconTextItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
