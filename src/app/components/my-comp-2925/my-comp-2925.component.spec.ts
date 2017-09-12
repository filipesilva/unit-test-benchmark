import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2925Component } from './my-comp-2925.component';

describe('MyComp2925Component', () => {
  let component: MyComp2925Component;
  let fixture: ComponentFixture<MyComp2925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
