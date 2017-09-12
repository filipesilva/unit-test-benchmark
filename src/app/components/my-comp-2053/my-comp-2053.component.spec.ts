import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2053Component } from './my-comp-2053.component';

describe('MyComp2053Component', () => {
  let component: MyComp2053Component;
  let fixture: ComponentFixture<MyComp2053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
