import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7064Component } from './my-comp-7064.component';

describe('MyComp7064Component', () => {
  let component: MyComp7064Component;
  let fixture: ComponentFixture<MyComp7064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
