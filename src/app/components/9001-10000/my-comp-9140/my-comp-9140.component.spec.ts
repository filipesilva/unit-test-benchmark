import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9140Component } from './my-comp-9140.component';

describe('MyComp9140Component', () => {
  let component: MyComp9140Component;
  let fixture: ComponentFixture<MyComp9140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
