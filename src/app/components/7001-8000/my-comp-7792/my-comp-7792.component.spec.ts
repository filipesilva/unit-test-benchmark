import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7792Component } from './my-comp-7792.component';

describe('MyComp7792Component', () => {
  let component: MyComp7792Component;
  let fixture: ComponentFixture<MyComp7792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
