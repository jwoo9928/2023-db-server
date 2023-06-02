import RentCar from "../../models/RentCar";
import Reserve from "../../models/Reserve";
import cron from "node-cron";

const reserveTableTimeObserver = async () => {
  try {
    const current = new Date("YYYY-MM-DD");
    const reserveTable = await Reserve.findAll({
      where: { startDate: current },
    });
    const result = Promise.all(
      reserveTable.map(async (value: Reserve) => {
        await RentCar.update(
          {
            dateRented: value.startDate,
            dateDue: value.endDate,
            cno: value.cno,
          },
          { where: { licensePlateNo: value.licensePlateNo } }
        );
      })
    );
    console.log("TIme Observer sucesss!!", result);
  } catch (e) {
    console.log("Time Observer activation failed..", e);
  }
};

const activateObserver = () => {
  cron.schedule("0 0 * * *", () => {
    reserveTableTimeObserver();
  });
};

export default activateObserver;
