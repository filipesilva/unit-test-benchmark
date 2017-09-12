import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5201Component } from './my-comp-5201.component';

describe('MyComp5201Component', () => {
  let component: MyComp5201Component;
  let fixture: ComponentFixture<MyComp5201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
