import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9969Component } from './my-comp-9969.component';

describe('MyComp9969Component', () => {
  let component: MyComp9969Component;
  let fixture: ComponentFixture<MyComp9969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
