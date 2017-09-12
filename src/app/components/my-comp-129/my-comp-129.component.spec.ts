import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp129Component } from './my-comp-129.component';

describe('MyComp129Component', () => {
  let component: MyComp129Component;
  let fixture: ComponentFixture<MyComp129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
