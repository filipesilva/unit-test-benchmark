import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1407Component } from './my-comp-1407.component';

describe('MyComp1407Component', () => {
  let component: MyComp1407Component;
  let fixture: ComponentFixture<MyComp1407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
