import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3743Component } from './my-comp-3743.component';

describe('MyComp3743Component', () => {
  let component: MyComp3743Component;
  let fixture: ComponentFixture<MyComp3743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
