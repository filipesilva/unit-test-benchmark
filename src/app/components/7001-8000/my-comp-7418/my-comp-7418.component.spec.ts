import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7418Component } from './my-comp-7418.component';

describe('MyComp7418Component', () => {
  let component: MyComp7418Component;
  let fixture: ComponentFixture<MyComp7418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
