import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp177Component } from './my-comp-177.component';

describe('MyComp177Component', () => {
  let component: MyComp177Component;
  let fixture: ComponentFixture<MyComp177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
