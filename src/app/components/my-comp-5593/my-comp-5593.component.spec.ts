import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5593Component } from './my-comp-5593.component';

describe('MyComp5593Component', () => {
  let component: MyComp5593Component;
  let fixture: ComponentFixture<MyComp5593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
