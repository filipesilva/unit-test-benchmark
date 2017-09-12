import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7944Component } from './my-comp-7944.component';

describe('MyComp7944Component', () => {
  let component: MyComp7944Component;
  let fixture: ComponentFixture<MyComp7944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
