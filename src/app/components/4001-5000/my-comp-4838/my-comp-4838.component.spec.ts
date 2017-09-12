import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4838Component } from './my-comp-4838.component';

describe('MyComp4838Component', () => {
  let component: MyComp4838Component;
  let fixture: ComponentFixture<MyComp4838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
