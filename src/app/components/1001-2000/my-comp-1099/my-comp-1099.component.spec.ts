import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1099Component } from './my-comp-1099.component';

describe('MyComp1099Component', () => {
  let component: MyComp1099Component;
  let fixture: ComponentFixture<MyComp1099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
