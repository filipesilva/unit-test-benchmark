import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2319Component } from './my-comp-2319.component';

describe('MyComp2319Component', () => {
  let component: MyComp2319Component;
  let fixture: ComponentFixture<MyComp2319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
