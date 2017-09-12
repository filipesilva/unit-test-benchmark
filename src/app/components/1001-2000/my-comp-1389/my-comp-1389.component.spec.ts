import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1389Component } from './my-comp-1389.component';

describe('MyComp1389Component', () => {
  let component: MyComp1389Component;
  let fixture: ComponentFixture<MyComp1389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
