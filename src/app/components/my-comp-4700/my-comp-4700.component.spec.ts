import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4700Component } from './my-comp-4700.component';

describe('MyComp4700Component', () => {
  let component: MyComp4700Component;
  let fixture: ComponentFixture<MyComp4700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
