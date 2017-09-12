import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5700Component } from './my-comp-5700.component';

describe('MyComp5700Component', () => {
  let component: MyComp5700Component;
  let fixture: ComponentFixture<MyComp5700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
