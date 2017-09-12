import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4039Component } from './my-comp-4039.component';

describe('MyComp4039Component', () => {
  let component: MyComp4039Component;
  let fixture: ComponentFixture<MyComp4039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
