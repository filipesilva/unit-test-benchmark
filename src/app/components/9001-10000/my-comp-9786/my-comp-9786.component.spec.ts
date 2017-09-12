import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9786Component } from './my-comp-9786.component';

describe('MyComp9786Component', () => {
  let component: MyComp9786Component;
  let fixture: ComponentFixture<MyComp9786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
