import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4062Component } from './my-comp-4062.component';

describe('MyComp4062Component', () => {
  let component: MyComp4062Component;
  let fixture: ComponentFixture<MyComp4062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
