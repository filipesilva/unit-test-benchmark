import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7648Component } from './my-comp-7648.component';

describe('MyComp7648Component', () => {
  let component: MyComp7648Component;
  let fixture: ComponentFixture<MyComp7648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
