import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp58Component } from './my-comp-58.component';

describe('MyComp58Component', () => {
  let component: MyComp58Component;
  let fixture: ComponentFixture<MyComp58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
