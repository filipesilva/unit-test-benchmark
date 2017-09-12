import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7242Component } from './my-comp-7242.component';

describe('MyComp7242Component', () => {
  let component: MyComp7242Component;
  let fixture: ComponentFixture<MyComp7242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
