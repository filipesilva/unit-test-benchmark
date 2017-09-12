import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4400Component } from './my-comp-4400.component';

describe('MyComp4400Component', () => {
  let component: MyComp4400Component;
  let fixture: ComponentFixture<MyComp4400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
