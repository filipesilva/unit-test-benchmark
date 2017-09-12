import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3936Component } from './my-comp-3936.component';

describe('MyComp3936Component', () => {
  let component: MyComp3936Component;
  let fixture: ComponentFixture<MyComp3936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
