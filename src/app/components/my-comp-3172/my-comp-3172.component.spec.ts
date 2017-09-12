import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3172Component } from './my-comp-3172.component';

describe('MyComp3172Component', () => {
  let component: MyComp3172Component;
  let fixture: ComponentFixture<MyComp3172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
