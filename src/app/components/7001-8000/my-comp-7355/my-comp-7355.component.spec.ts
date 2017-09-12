import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7355Component } from './my-comp-7355.component';

describe('MyComp7355Component', () => {
  let component: MyComp7355Component;
  let fixture: ComponentFixture<MyComp7355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
