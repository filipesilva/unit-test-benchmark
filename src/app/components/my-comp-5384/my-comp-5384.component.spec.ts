import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5384Component } from './my-comp-5384.component';

describe('MyComp5384Component', () => {
  let component: MyComp5384Component;
  let fixture: ComponentFixture<MyComp5384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
