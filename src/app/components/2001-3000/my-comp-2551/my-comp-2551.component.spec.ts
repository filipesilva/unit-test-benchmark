import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2551Component } from './my-comp-2551.component';

describe('MyComp2551Component', () => {
  let component: MyComp2551Component;
  let fixture: ComponentFixture<MyComp2551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
