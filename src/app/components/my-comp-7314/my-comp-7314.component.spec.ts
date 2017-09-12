import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7314Component } from './my-comp-7314.component';

describe('MyComp7314Component', () => {
  let component: MyComp7314Component;
  let fixture: ComponentFixture<MyComp7314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
