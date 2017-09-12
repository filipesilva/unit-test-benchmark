import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3002Component } from './my-comp-3002.component';

describe('MyComp3002Component', () => {
  let component: MyComp3002Component;
  let fixture: ComponentFixture<MyComp3002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
