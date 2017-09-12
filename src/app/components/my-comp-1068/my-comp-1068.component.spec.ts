import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1068Component } from './my-comp-1068.component';

describe('MyComp1068Component', () => {
  let component: MyComp1068Component;
  let fixture: ComponentFixture<MyComp1068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
