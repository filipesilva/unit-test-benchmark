import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9194Component } from './my-comp-9194.component';

describe('MyComp9194Component', () => {
  let component: MyComp9194Component;
  let fixture: ComponentFixture<MyComp9194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
