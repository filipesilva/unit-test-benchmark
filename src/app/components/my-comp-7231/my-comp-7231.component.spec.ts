import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7231Component } from './my-comp-7231.component';

describe('MyComp7231Component', () => {
  let component: MyComp7231Component;
  let fixture: ComponentFixture<MyComp7231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
