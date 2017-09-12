import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7422Component } from './my-comp-7422.component';

describe('MyComp7422Component', () => {
  let component: MyComp7422Component;
  let fixture: ComponentFixture<MyComp7422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
