import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5977Component } from './my-comp-5977.component';

describe('MyComp5977Component', () => {
  let component: MyComp5977Component;
  let fixture: ComponentFixture<MyComp5977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
