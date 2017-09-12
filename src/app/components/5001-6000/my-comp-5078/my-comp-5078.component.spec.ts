import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5078Component } from './my-comp-5078.component';

describe('MyComp5078Component', () => {
  let component: MyComp5078Component;
  let fixture: ComponentFixture<MyComp5078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
