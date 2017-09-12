import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1293Component } from './my-comp-1293.component';

describe('MyComp1293Component', () => {
  let component: MyComp1293Component;
  let fixture: ComponentFixture<MyComp1293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
