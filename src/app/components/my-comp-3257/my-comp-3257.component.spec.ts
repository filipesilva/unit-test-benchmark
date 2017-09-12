import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3257Component } from './my-comp-3257.component';

describe('MyComp3257Component', () => {
  let component: MyComp3257Component;
  let fixture: ComponentFixture<MyComp3257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
