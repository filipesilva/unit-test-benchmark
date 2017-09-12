import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7427Component } from './my-comp-7427.component';

describe('MyComp7427Component', () => {
  let component: MyComp7427Component;
  let fixture: ComponentFixture<MyComp7427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
