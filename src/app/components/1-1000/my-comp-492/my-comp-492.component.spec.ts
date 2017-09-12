import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp492Component } from './my-comp-492.component';

describe('MyComp492Component', () => {
  let component: MyComp492Component;
  let fixture: ComponentFixture<MyComp492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
