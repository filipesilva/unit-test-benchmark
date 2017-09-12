import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3014Component } from './my-comp-3014.component';

describe('MyComp3014Component', () => {
  let component: MyComp3014Component;
  let fixture: ComponentFixture<MyComp3014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
