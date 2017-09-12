import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4246Component } from './my-comp-4246.component';

describe('MyComp4246Component', () => {
  let component: MyComp4246Component;
  let fixture: ComponentFixture<MyComp4246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
