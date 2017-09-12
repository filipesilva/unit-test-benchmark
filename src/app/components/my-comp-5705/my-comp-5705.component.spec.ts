import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5705Component } from './my-comp-5705.component';

describe('MyComp5705Component', () => {
  let component: MyComp5705Component;
  let fixture: ComponentFixture<MyComp5705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
