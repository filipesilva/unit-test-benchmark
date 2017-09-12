import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7537Component } from './my-comp-7537.component';

describe('MyComp7537Component', () => {
  let component: MyComp7537Component;
  let fixture: ComponentFixture<MyComp7537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
