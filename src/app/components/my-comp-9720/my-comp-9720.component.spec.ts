import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9720Component } from './my-comp-9720.component';

describe('MyComp9720Component', () => {
  let component: MyComp9720Component;
  let fixture: ComponentFixture<MyComp9720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
