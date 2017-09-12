import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7394Component } from './my-comp-7394.component';

describe('MyComp7394Component', () => {
  let component: MyComp7394Component;
  let fixture: ComponentFixture<MyComp7394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
