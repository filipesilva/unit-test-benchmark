import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp956Component } from './my-comp-956.component';

describe('MyComp956Component', () => {
  let component: MyComp956Component;
  let fixture: ComponentFixture<MyComp956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
