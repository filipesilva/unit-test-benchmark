import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2595Component } from './my-comp-2595.component';

describe('MyComp2595Component', () => {
  let component: MyComp2595Component;
  let fixture: ComponentFixture<MyComp2595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
