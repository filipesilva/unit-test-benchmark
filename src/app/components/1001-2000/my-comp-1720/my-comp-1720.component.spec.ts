import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1720Component } from './my-comp-1720.component';

describe('MyComp1720Component', () => {
  let component: MyComp1720Component;
  let fixture: ComponentFixture<MyComp1720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
