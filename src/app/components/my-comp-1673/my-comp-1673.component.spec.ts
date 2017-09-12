import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1673Component } from './my-comp-1673.component';

describe('MyComp1673Component', () => {
  let component: MyComp1673Component;
  let fixture: ComponentFixture<MyComp1673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
