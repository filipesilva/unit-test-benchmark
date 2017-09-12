import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5127Component } from './my-comp-5127.component';

describe('MyComp5127Component', () => {
  let component: MyComp5127Component;
  let fixture: ComponentFixture<MyComp5127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
