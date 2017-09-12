import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4245Component } from './my-comp-4245.component';

describe('MyComp4245Component', () => {
  let component: MyComp4245Component;
  let fixture: ComponentFixture<MyComp4245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
