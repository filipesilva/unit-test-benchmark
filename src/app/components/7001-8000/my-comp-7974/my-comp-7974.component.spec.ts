import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7974Component } from './my-comp-7974.component';

describe('MyComp7974Component', () => {
  let component: MyComp7974Component;
  let fixture: ComponentFixture<MyComp7974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
