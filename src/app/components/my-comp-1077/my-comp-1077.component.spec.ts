import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1077Component } from './my-comp-1077.component';

describe('MyComp1077Component', () => {
  let component: MyComp1077Component;
  let fixture: ComponentFixture<MyComp1077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
