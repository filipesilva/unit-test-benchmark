import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7550Component } from './my-comp-7550.component';

describe('MyComp7550Component', () => {
  let component: MyComp7550Component;
  let fixture: ComponentFixture<MyComp7550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
