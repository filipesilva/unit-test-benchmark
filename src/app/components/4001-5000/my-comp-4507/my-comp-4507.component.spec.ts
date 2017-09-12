import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4507Component } from './my-comp-4507.component';

describe('MyComp4507Component', () => {
  let component: MyComp4507Component;
  let fixture: ComponentFixture<MyComp4507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
