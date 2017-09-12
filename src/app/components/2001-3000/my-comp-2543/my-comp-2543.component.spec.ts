import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2543Component } from './my-comp-2543.component';

describe('MyComp2543Component', () => {
  let component: MyComp2543Component;
  let fixture: ComponentFixture<MyComp2543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
