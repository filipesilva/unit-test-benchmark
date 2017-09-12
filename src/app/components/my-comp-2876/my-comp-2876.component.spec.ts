import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2876Component } from './my-comp-2876.component';

describe('MyComp2876Component', () => {
  let component: MyComp2876Component;
  let fixture: ComponentFixture<MyComp2876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
