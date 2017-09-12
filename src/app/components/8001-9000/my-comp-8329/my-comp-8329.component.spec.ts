import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8329Component } from './my-comp-8329.component';

describe('MyComp8329Component', () => {
  let component: MyComp8329Component;
  let fixture: ComponentFixture<MyComp8329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
