import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7038Component } from './my-comp-7038.component';

describe('MyComp7038Component', () => {
  let component: MyComp7038Component;
  let fixture: ComponentFixture<MyComp7038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
