import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import DeleteButton from "../../DeleteButton";
import useFetchConceptoPago from "../../../hooks/Config/fetchConceptoPago";
import DeleteConcepto from "../../../hooks/Config/deleteConceptoPago";
import { Typography } from "@mui/material";
import { DividerTitle } from "../../Dividers";

const ConceptoPagoList = ({ onConceptCreation }) => {
  const { loading, conceptos, fetchConceptos } = useFetchConceptoPago();
  const { deleteConcepto, error } = DeleteConcepto();
  const [onConceptDelete, setOnConceptDelete] = useState(false);

  const handleOnConceptDelete = () => {
    setOnConceptDelete(!onConceptDelete);
  };

  useEffect(() => {
    fetchConceptos();
  }, [onConceptCreation, onConceptDelete]);

  useEffect(() => {
    console.log("Conceptos", conceptos);
  }, [conceptos]);

  const handleDeleteConcepto = async (index) => {
    swal({
      title: "¿Desea eliminar el concepto?",
      text: "Una vez eliminado no podrá ser recuperado",
      icon: "warning",
      buttons: ["No", "Sí"],
      dangerMode: true,
    }).then(async (willCancel) => {
      if (willCancel) {
        await deleteConcepto(index);
        handleOnConceptDelete();
      }
    });
  };

  return (
    <div>
      <Typography variant="h6" sx={{ color: "#01662b" }}>
        Conceptos de Pago
      </Typography>
      <DividerTitle />
      <Grid
        sx={{
          mb: 1,
          display: "flex",
          flexDirection: "column",
          height: 200,
          overflow: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "dark",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "lightgray",
            borderRadius: "5px",
          },
        }}
      >
        <Table stickyHeader size="medium">
          <TableBody>
            {conceptos.map((concepto, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{concepto}</TableCell>
                <TableCell className="text-center">
                  <DeleteButton onDelete={() => handleDeleteConcepto(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </div>
  );
};

export default ConceptoPagoList;
