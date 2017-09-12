import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1053Component } from './my-comp-1053.component';

describe('MyComp1053Component', () => {
  let component: MyComp1053Component;
  let fixture: ComponentFixture<MyComp1053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
