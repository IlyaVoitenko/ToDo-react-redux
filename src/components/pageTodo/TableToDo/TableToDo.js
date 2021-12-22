import style from '../TableToDo/TablBody/ListToDo/css/ListToDo.module.css'; //ListToDo.module.css
import TableHead from './TableHead';
import TableBody from './TablBody';
const TableToDo = () => {
  return (
    <div>
      <table className={style.tableToDo}>
        <TableHead />
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </div>
  );
};
export default TableToDo;
