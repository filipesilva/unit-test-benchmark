import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3433Component } from './my-comp-3433.component';

describe('MyComp3433Component', () => {
  let component: MyComp3433Component;
  let fixture: ComponentFixture<MyComp3433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
