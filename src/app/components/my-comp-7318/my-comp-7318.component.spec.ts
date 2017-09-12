import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7318Component } from './my-comp-7318.component';

describe('MyComp7318Component', () => {
  let component: MyComp7318Component;
  let fixture: ComponentFixture<MyComp7318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
