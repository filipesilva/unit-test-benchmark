import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4315Component } from './my-comp-4315.component';

describe('MyComp4315Component', () => {
  let component: MyComp4315Component;
  let fixture: ComponentFixture<MyComp4315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
