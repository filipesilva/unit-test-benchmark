import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5010Component } from './my-comp-5010.component';

describe('MyComp5010Component', () => {
  let component: MyComp5010Component;
  let fixture: ComponentFixture<MyComp5010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
