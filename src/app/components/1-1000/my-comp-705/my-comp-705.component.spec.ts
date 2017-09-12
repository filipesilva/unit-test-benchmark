import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp705Component } from './my-comp-705.component';

describe('MyComp705Component', () => {
  let component: MyComp705Component;
  let fixture: ComponentFixture<MyComp705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
