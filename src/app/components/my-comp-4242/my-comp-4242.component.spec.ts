import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4242Component } from './my-comp-4242.component';

describe('MyComp4242Component', () => {
  let component: MyComp4242Component;
  let fixture: ComponentFixture<MyComp4242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
