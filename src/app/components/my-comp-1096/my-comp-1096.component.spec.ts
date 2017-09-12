import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1096Component } from './my-comp-1096.component';

describe('MyComp1096Component', () => {
  let component: MyComp1096Component;
  let fixture: ComponentFixture<MyComp1096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
