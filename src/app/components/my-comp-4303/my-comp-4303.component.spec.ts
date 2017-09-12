import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4303Component } from './my-comp-4303.component';

describe('MyComp4303Component', () => {
  let component: MyComp4303Component;
  let fixture: ComponentFixture<MyComp4303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
