import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4334Component } from './my-comp-4334.component';

describe('MyComp4334Component', () => {
  let component: MyComp4334Component;
  let fixture: ComponentFixture<MyComp4334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
