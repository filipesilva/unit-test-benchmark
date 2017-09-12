import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6016Component } from './my-comp-6016.component';

describe('MyComp6016Component', () => {
  let component: MyComp6016Component;
  let fixture: ComponentFixture<MyComp6016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
