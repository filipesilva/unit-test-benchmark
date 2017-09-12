import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9952Component } from './my-comp-9952.component';

describe('MyComp9952Component', () => {
  let component: MyComp9952Component;
  let fixture: ComponentFixture<MyComp9952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
