import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp310Component } from './my-comp-310.component';

describe('MyComp310Component', () => {
  let component: MyComp310Component;
  let fixture: ComponentFixture<MyComp310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
