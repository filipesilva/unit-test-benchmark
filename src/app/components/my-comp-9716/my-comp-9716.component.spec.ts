import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9716Component } from './my-comp-9716.component';

describe('MyComp9716Component', () => {
  let component: MyComp9716Component;
  let fixture: ComponentFixture<MyComp9716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
