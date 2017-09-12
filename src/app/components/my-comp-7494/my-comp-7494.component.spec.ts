import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7494Component } from './my-comp-7494.component';

describe('MyComp7494Component', () => {
  let component: MyComp7494Component;
  let fixture: ComponentFixture<MyComp7494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
