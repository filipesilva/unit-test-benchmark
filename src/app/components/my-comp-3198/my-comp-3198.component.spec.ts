import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3198Component } from './my-comp-3198.component';

describe('MyComp3198Component', () => {
  let component: MyComp3198Component;
  let fixture: ComponentFixture<MyComp3198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
