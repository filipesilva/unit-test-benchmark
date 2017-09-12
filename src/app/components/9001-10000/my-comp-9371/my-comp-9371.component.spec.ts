import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9371Component } from './my-comp-9371.component';

describe('MyComp9371Component', () => {
  let component: MyComp9371Component;
  let fixture: ComponentFixture<MyComp9371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
