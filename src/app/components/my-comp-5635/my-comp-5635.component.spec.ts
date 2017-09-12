import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5635Component } from './my-comp-5635.component';

describe('MyComp5635Component', () => {
  let component: MyComp5635Component;
  let fixture: ComponentFixture<MyComp5635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
