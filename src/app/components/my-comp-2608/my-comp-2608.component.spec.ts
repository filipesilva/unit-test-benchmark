import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2608Component } from './my-comp-2608.component';

describe('MyComp2608Component', () => {
  let component: MyComp2608Component;
  let fixture: ComponentFixture<MyComp2608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
