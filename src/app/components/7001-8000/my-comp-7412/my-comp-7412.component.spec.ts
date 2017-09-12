import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7412Component } from './my-comp-7412.component';

describe('MyComp7412Component', () => {
  let component: MyComp7412Component;
  let fixture: ComponentFixture<MyComp7412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
