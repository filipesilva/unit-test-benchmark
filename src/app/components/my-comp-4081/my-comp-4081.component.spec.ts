import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4081Component } from './my-comp-4081.component';

describe('MyComp4081Component', () => {
  let component: MyComp4081Component;
  let fixture: ComponentFixture<MyComp4081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
