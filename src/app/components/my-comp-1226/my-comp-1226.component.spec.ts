import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1226Component } from './my-comp-1226.component';

describe('MyComp1226Component', () => {
  let component: MyComp1226Component;
  let fixture: ComponentFixture<MyComp1226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
