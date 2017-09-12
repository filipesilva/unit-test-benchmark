import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7952Component } from './my-comp-7952.component';

describe('MyComp7952Component', () => {
  let component: MyComp7952Component;
  let fixture: ComponentFixture<MyComp7952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
