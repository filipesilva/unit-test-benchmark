import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7730Component } from './my-comp-7730.component';

describe('MyComp7730Component', () => {
  let component: MyComp7730Component;
  let fixture: ComponentFixture<MyComp7730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
