import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4317Component } from './my-comp-4317.component';

describe('MyComp4317Component', () => {
  let component: MyComp4317Component;
  let fixture: ComponentFixture<MyComp4317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
