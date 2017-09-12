import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5066Component } from './my-comp-5066.component';

describe('MyComp5066Component', () => {
  let component: MyComp5066Component;
  let fixture: ComponentFixture<MyComp5066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
