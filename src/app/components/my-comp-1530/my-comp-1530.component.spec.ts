import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1530Component } from './my-comp-1530.component';

describe('MyComp1530Component', () => {
  let component: MyComp1530Component;
  let fixture: ComponentFixture<MyComp1530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
