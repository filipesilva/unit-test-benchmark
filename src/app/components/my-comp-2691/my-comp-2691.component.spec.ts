import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2691Component } from './my-comp-2691.component';

describe('MyComp2691Component', () => {
  let component: MyComp2691Component;
  let fixture: ComponentFixture<MyComp2691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
