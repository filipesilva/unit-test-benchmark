import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4410Component } from './my-comp-4410.component';

describe('MyComp4410Component', () => {
  let component: MyComp4410Component;
  let fixture: ComponentFixture<MyComp4410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
