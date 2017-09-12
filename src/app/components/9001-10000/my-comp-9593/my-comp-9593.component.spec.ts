import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9593Component } from './my-comp-9593.component';

describe('MyComp9593Component', () => {
  let component: MyComp9593Component;
  let fixture: ComponentFixture<MyComp9593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
