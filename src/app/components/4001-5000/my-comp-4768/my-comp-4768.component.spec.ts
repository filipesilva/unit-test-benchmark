import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4768Component } from './my-comp-4768.component';

describe('MyComp4768Component', () => {
  let component: MyComp4768Component;
  let fixture: ComponentFixture<MyComp4768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
