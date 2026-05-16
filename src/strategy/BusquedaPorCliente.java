package strategy;

public class BusquedaPorCliente implements EstrategiaBusqueda {

    @Override
    public void buscar(String dato) {

        System.out.println("Busqueda por cliente: " + dato);
    }
}
