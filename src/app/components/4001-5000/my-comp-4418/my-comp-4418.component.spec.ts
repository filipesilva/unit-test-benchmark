import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4418Component } from './my-comp-4418.component';

describe('MyComp4418Component', () => {
  let component: MyComp4418Component;
  let fixture: ComponentFixture<MyComp4418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
