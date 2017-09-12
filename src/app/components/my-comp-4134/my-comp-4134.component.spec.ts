import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4134Component } from './my-comp-4134.component';

describe('MyComp4134Component', () => {
  let component: MyComp4134Component;
  let fixture: ComponentFixture<MyComp4134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
