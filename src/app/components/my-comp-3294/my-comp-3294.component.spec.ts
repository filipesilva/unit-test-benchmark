import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3294Component } from './my-comp-3294.component';

describe('MyComp3294Component', () => {
  let component: MyComp3294Component;
  let fixture: ComponentFixture<MyComp3294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
