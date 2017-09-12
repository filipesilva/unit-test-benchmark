import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4212Component } from './my-comp-4212.component';

describe('MyComp4212Component', () => {
  let component: MyComp4212Component;
  let fixture: ComponentFixture<MyComp4212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
