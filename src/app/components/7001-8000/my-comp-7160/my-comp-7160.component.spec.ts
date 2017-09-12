import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7160Component } from './my-comp-7160.component';

describe('MyComp7160Component', () => {
  let component: MyComp7160Component;
  let fixture: ComponentFixture<MyComp7160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
