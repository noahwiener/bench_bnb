class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:filters])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save!
      render :index
    else
      render :index
    end
  end


  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

end
