import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7057Component } from './my-comp-7057.component';

describe('MyComp7057Component', () => {
  let component: MyComp7057Component;
  let fixture: ComponentFixture<MyComp7057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
