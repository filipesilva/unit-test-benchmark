import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7666Component } from './my-comp-7666.component';

describe('MyComp7666Component', () => {
  let component: MyComp7666Component;
  let fixture: ComponentFixture<MyComp7666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
