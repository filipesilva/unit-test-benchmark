import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1141Component } from './my-comp-1141.component';

describe('MyComp1141Component', () => {
  let component: MyComp1141Component;
  let fixture: ComponentFixture<MyComp1141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
