import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp812Component } from './my-comp-812.component';

describe('MyComp812Component', () => {
  let component: MyComp812Component;
  let fixture: ComponentFixture<MyComp812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
