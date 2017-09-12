import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4200Component } from './my-comp-4200.component';

describe('MyComp4200Component', () => {
  let component: MyComp4200Component;
  let fixture: ComponentFixture<MyComp4200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
