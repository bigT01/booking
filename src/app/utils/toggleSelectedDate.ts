import {shallowEqual} from "@/utils/shallowEqual";
import {selectedDateFormat} from "@/constants/interface";

export const toggleSelectedDate = (oldDate:selectedDateFormat | null, newDate:selectedDateFormat): null | selectedDateFormat => {
    return shallowEqual(oldDate, newDate) ? null : newDate
}