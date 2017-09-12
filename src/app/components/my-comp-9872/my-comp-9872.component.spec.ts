import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9872Component } from './my-comp-9872.component';

describe('MyComp9872Component', () => {
  let component: MyComp9872Component;
  let fixture: ComponentFixture<MyComp9872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
