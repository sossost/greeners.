import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { vars } from "@/token";

interface CircularProgressProps {
  radius: number;
  percent: number;
  thickness?: number;
}

export const RadialProgressBar = ({
  radius,
  percent,
  thickness = 10,
}: CircularProgressProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef) return;

    const svg = d3.select(svgRef.current);
    const width = radius * 2;
    const height = radius * 2;
    const centerX = width / 2;
    const centerY = height / 2;
    const arcRadius = radius - 5;
    const startAngle = 0;
    const endAngle = startAngle + (Math.PI * 2 * percent) / 100;

    const backgroundArc = d3
      .arc<unknown>()
      .innerRadius(arcRadius - thickness)
      .outerRadius(arcRadius)
      .startAngle(startAngle)
      .endAngle(startAngle + Math.PI * 2);

    svg
      .append("path")
      .attr("d", backgroundArc)
      .attr("transform", `translate(${centerX}, ${centerY})`)
      .attr("fill", vars.colors.lightGray); // 배경 색상

    const arc = d3
      .arc<unknown>()
      .innerRadius(arcRadius - thickness)
      .outerRadius(arcRadius)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .cornerRadius(10);

    svg
      .append("path")
      .attr("d", arc)
      .attr("transform", `translate(${centerX}, ${centerY})`)
      .attr("fill", vars.colors.primary); // 프로그레스 바의 색상

    // 퍼센트 텍스트를 추가할 수 있습니다.
    svg
      .append("text")
      .text(`${percent}%`)
      .attr("x", centerX)
      .attr("y", centerY)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("fill", vars.colors.primary); // 텍스트의 색상
  }, [radius, percent, thickness]);

  return <svg width={radius * 2} height={radius * 2} ref={svgRef} />;
};
