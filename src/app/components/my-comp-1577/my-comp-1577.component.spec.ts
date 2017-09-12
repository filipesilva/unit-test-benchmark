import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1577Component } from './my-comp-1577.component';

describe('MyComp1577Component', () => {
  let component: MyComp1577Component;
  let fixture: ComponentFixture<MyComp1577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
