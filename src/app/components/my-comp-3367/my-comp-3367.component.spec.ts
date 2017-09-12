import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3367Component } from './my-comp-3367.component';

describe('MyComp3367Component', () => {
  let component: MyComp3367Component;
  let fixture: ComponentFixture<MyComp3367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
