import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7177Component } from './my-comp-7177.component';

describe('MyComp7177Component', () => {
  let component: MyComp7177Component;
  let fixture: ComponentFixture<MyComp7177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
