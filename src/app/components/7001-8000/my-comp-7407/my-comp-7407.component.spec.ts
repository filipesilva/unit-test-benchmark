import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7407Component } from './my-comp-7407.component';

describe('MyComp7407Component', () => {
  let component: MyComp7407Component;
  let fixture: ComponentFixture<MyComp7407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
