import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp925Component } from './my-comp-925.component';

describe('MyComp925Component', () => {
  let component: MyComp925Component;
  let fixture: ComponentFixture<MyComp925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
