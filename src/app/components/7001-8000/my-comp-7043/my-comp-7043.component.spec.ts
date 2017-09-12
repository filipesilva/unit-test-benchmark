import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7043Component } from './my-comp-7043.component';

describe('MyComp7043Component', () => {
  let component: MyComp7043Component;
  let fixture: ComponentFixture<MyComp7043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
