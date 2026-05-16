package strategy;

public class BusquedaPorCodigo implements EstrategiaBusqueda {

    @Override
    public void buscar(String dato) {

        System.out.println("Busqueda por codigo: " + dato);
    }
}
