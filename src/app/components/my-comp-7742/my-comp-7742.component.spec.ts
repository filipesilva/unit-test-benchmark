import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7742Component } from './my-comp-7742.component';

describe('MyComp7742Component', () => {
  let component: MyComp7742Component;
  let fixture: ComponentFixture<MyComp7742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
