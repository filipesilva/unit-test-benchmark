import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2769Component } from './my-comp-2769.component';

describe('MyComp2769Component', () => {
  let component: MyComp2769Component;
  let fixture: ComponentFixture<MyComp2769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
