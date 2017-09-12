import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1223Component } from './my-comp-1223.component';

describe('MyComp1223Component', () => {
  let component: MyComp1223Component;
  let fixture: ComponentFixture<MyComp1223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
