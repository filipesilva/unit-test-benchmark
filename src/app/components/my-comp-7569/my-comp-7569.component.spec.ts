import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7569Component } from './my-comp-7569.component';

describe('MyComp7569Component', () => {
  let component: MyComp7569Component;
  let fixture: ComponentFixture<MyComp7569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
