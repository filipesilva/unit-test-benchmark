import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp200Component } from './my-comp-200.component';

describe('MyComp200Component', () => {
  let component: MyComp200Component;
  let fixture: ComponentFixture<MyComp200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
