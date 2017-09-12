import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7317Component } from './my-comp-7317.component';

describe('MyComp7317Component', () => {
  let component: MyComp7317Component;
  let fixture: ComponentFixture<MyComp7317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
