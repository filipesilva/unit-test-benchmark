import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3318Component } from './my-comp-3318.component';

describe('MyComp3318Component', () => {
  let component: MyComp3318Component;
  let fixture: ComponentFixture<MyComp3318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
