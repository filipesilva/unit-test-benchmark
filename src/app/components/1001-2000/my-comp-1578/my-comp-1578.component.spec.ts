import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1578Component } from './my-comp-1578.component';

describe('MyComp1578Component', () => {
  let component: MyComp1578Component;
  let fixture: ComponentFixture<MyComp1578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
