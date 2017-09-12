import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4480Component } from './my-comp-4480.component';

describe('MyComp4480Component', () => {
  let component: MyComp4480Component;
  let fixture: ComponentFixture<MyComp4480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
