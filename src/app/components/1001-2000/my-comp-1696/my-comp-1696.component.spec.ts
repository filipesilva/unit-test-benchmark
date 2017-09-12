import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1696Component } from './my-comp-1696.component';

describe('MyComp1696Component', () => {
  let component: MyComp1696Component;
  let fixture: ComponentFixture<MyComp1696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
