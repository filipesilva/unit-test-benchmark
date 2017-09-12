import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1160Component } from './my-comp-1160.component';

describe('MyComp1160Component', () => {
  let component: MyComp1160Component;
  let fixture: ComponentFixture<MyComp1160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
