import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3931Component } from './my-comp-3931.component';

describe('MyComp3931Component', () => {
  let component: MyComp3931Component;
  let fixture: ComponentFixture<MyComp3931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
