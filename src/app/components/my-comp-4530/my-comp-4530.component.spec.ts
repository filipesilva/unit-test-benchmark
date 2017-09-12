import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4530Component } from './my-comp-4530.component';

describe('MyComp4530Component', () => {
  let component: MyComp4530Component;
  let fixture: ComponentFixture<MyComp4530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
