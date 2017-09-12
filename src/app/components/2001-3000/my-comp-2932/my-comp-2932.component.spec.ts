import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2932Component } from './my-comp-2932.component';

describe('MyComp2932Component', () => {
  let component: MyComp2932Component;
  let fixture: ComponentFixture<MyComp2932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
