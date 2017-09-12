import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4752Component } from './my-comp-4752.component';

describe('MyComp4752Component', () => {
  let component: MyComp4752Component;
  let fixture: ComponentFixture<MyComp4752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
