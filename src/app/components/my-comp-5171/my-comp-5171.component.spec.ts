import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5171Component } from './my-comp-5171.component';

describe('MyComp5171Component', () => {
  let component: MyComp5171Component;
  let fixture: ComponentFixture<MyComp5171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
