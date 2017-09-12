import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7867Component } from './my-comp-7867.component';

describe('MyComp7867Component', () => {
  let component: MyComp7867Component;
  let fixture: ComponentFixture<MyComp7867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
