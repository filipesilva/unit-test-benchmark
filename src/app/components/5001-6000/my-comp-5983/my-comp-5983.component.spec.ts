import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5983Component } from './my-comp-5983.component';

describe('MyComp5983Component', () => {
  let component: MyComp5983Component;
  let fixture: ComponentFixture<MyComp5983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
