import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp566Component } from './my-comp-566.component';

describe('MyComp566Component', () => {
  let component: MyComp566Component;
  let fixture: ComponentFixture<MyComp566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
