/* eslint-disable unicorn/prefer-spread */
/* eslint-disable multiline-ternary */
import * as React from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { useCampaign } from '@/store/campaign';

interface Data {
  id: number;
  name: string;
  quanlity: number;
}

function createData(id: number, name: string, quanlity: number): Data {
  return {
    id,
    name,
    quanlity,
  };
}

interface HeadCell {
  id: string;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'subCampaignName',
    numeric: false,
    label: 'Tên quảng cáo*',
  },
  {
    id: 'quantity',
    numeric: true,
    label: 'Số lượng*',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={'left'}>
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  selected: number[];
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { selected } = props;
  const { onAddAdsCampaign, onDeleteAdsCampaign } = useCampaign();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(selected?.length > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {selected?.length > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
          {selected?.length} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
          DANH SÁCH QUẢNG CÁO
        </Typography>
      )}
      {selected?.length > 0 ? (
        <Tooltip title='Delete' onClick={onDeleteAdsCampaign(selected)}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Button variant='outlined' onClick={onAddAdsCampaign}>
          <AddOutlinedIcon />
          THÊM
        </Button>
      )}
    </Toolbar>
  );
}
function SubCampaign() {
  const { campaignSelected, onDeleteAdsCampaign, onChangeValuesAds } = useCampaign();

  const [selected, setSelected] = React.useState<number[]>([]);

  const rows = campaignSelected.ads?.map((v) => createData(v.id, v.name, v.quantity)) || [];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    switch (selectedIndex) {
      case -1: {
        newSelected = newSelected.concat(selected, id);

        break;
      }
      case 0: {
        newSelected = newSelected.concat(selected.slice(1));

        break;
      }
      case selected.length - 1: {
        newSelected = newSelected.concat(selected.slice(0, -1));

        break;
      }
      default: {
        if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
      }
    }
    setSelected(newSelected as number[]);
  };

  const isSelected = (id: number) => selected.includes(id);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar selected={selected} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox
                        color='primary'
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onClick={(event) => handleClick(event, row.id)}
                      />
                    </TableCell>
                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                      <TextField
                        sx={{
                          width: '100%',
                        }}
                        id='adsName'
                        error={!row.name}
                        required
                        variant='standard'
                        value={row.name}
                        onChange={(e) => onChangeValuesAds(row.id, 'name', e.target.value || '')}
                      />
                    </TableCell>
                    <TableCell align='right'>
                      <TextField
                        sx={{
                          width: '100%',
                        }}
                        id='adsQuanlity'
                        type='number'
                        error={!row.quanlity}
                        required
                        variant='standard'
                        value={row.quanlity}
                        onChange={(e) =>
                          onChangeValuesAds(row.id, 'quantity', +e.target.value || '')
                        }
                      />
                    </TableCell>
                    <TableCell align='right'>
                      <Tooltip title='Xoá' onClick={onDeleteAdsCampaign([row.id])}>
                        <DeleteIcon />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default SubCampaign;
