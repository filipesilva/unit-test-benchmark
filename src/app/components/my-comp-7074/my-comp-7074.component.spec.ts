import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7074Component } from './my-comp-7074.component';

describe('MyComp7074Component', () => {
  let component: MyComp7074Component;
  let fixture: ComponentFixture<MyComp7074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
