import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp849Component } from './my-comp-849.component';

describe('MyComp849Component', () => {
  let component: MyComp849Component;
  let fixture: ComponentFixture<MyComp849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
