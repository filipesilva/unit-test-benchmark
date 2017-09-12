import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5945Component } from './my-comp-5945.component';

describe('MyComp5945Component', () => {
  let component: MyComp5945Component;
  let fixture: ComponentFixture<MyComp5945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
