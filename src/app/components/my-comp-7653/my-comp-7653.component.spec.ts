import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7653Component } from './my-comp-7653.component';

describe('MyComp7653Component', () => {
  let component: MyComp7653Component;
  let fixture: ComponentFixture<MyComp7653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
