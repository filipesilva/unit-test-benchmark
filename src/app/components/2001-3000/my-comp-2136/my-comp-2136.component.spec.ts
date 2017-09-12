import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2136Component } from './my-comp-2136.component';

describe('MyComp2136Component', () => {
  let component: MyComp2136Component;
  let fixture: ComponentFixture<MyComp2136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
